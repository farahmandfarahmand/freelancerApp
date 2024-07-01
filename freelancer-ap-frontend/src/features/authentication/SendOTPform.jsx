import TextFiled from "../../ui/textFiled";

import Loading from "../../ui/Loading";

function SendOTPform({ onSubmit, isSendingOtp, phoneNumber, setPhoneNumber }) {
  return (
    <div className="">
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextFiled
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
       <div className="">
       {isSendingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
       </div>
      </form>
    </div>
  );
}

export default SendOTPform;
