import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signInStyles.scss";
import { auth, signInWithGoogle } from "../../firebaseInit";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [formData, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("res:", res);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setForm((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          onChange={onChangeInput}
          type="email"
          label="Email"
          value={formData.email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={onChangeInput}
          value={formData.password}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In </CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
