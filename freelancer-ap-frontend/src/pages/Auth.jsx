import AuthContainer from "../features/authentication/AuthContainer";

//? auth or login page

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center  pt-10 ">
        {/* <SendOTPform/>
           <CheckOTPform/> */}
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;

//? 2 steps exist this component
// 1. sendOtp
// 2. checkOtp

//! feature-based driven folder structure:
//project ->(components, hooks, context, ...)
// proposal
// users
// category
// authentication
