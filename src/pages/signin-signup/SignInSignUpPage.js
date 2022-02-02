import React from "react";
import SignIn from "../../components/sign-in/SignInComponent";
import Signup from "../../components/sign-up/Signup";
import "./signInSignUpStyles.scss";

function SignInSignUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
}

export default SignInSignUpPage;
