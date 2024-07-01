import { useState } from "react";
import SendOTPform from "./SendOTPform";
import CheckOTPform from "./CheckOTPform";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

// -------------------------------------

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    //this request is post => useMutation
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber: phoneNumber });
      console.log(data);
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09141001872");
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPform
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
      // return <SendOTPform setStep={setStep} phoneNumber={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>;
      case 2:
        return (
          <CheckOTPform
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
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
