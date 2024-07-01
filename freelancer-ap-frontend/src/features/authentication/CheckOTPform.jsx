import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";
// ---------------------------------------

const RESEND_TIME=90;

function CheckOTPform({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  //otp means the code that use one

  const [time, setTime] = useState(RESEND_TIME);

  const navigate = useNavigate();

  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        phoneNumber,
        otp,
      });
      toast.success(message);
      console.log(data);
      
      //? if user is active -> name, email, role of user to be determined => user push to /owner or/ freelancer
      //? if user is deactive => user push to /complete-profile -> write name ,...

      if (user.isActive) {
        //
      }
      // return navigate("/complete-profile")
      //the return to cause process of component to be finish
      // if (Number(user.status) !== 2) {
      //     navigate("/");
      //     toast("پروفایل شما در انتظار تایید است",{
      //       icon: '👏',
      //     });
      //     return
      //   }
      else {
        navigate("/complete-profile");
      }

      // if (user.role === "OWNER") navigate("/owner");
      // if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <button onClick={onBack}>
          <HiArrowRight className="w-6 h-6 text-secondary-500" />
        </button>
        {otpResponse && (
          <p className="flex items-center gap-x-2 my-4">
            <span> {otpResponse?.message}</span>
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6 text-primary-900" />
            </button>
          </p>
        )}
        <div className="mb-4 text-secondary-500">
          {time > 0 ? (
            <p> {time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOtp}> ارسال مجدد کد تایید</button>
          )}
        </div>
        <p className="font-bold text-secondary-800 pt-4 pl-4 ">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6} // 6 number of code send to user
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          //? {...props} means : props send to input
          containerStyle="flex flex-row-reverse justify-center gap-x-2"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300)",
            borderRadius: "0.5rem",
          }}
        />
        <div className="">
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPform;
