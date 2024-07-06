import { useState } from "react";
import SendOTPform from "./SendOTPform";
import CheckOTPform from "./CheckOTPform";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

// -------------------------------------

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    //this request is post => useMutation
    // e.preventDefault();
    console.log(data);
    try {
      // const data = await mutateAsync({ phoneNumber: phoneNumber });
      const {message} = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(2);
  // const [phoneNumber, setPhoneNumber] = useState("09141001872");
  const {register,handleSubmit,getValues}=useForm();
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPform
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            // onSubmit={sendOtpHandler}
            // phoneNumber={phoneNumber}
            // setPhoneNumber={setPhoneNumber}
          />
        );
      // return <SendOTPform setStep={setStep} phoneNumber={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>;
      case 2:
        return (
          <CheckOTPform
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            // phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
