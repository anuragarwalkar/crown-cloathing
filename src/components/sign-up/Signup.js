import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, createUserProfileDocument } from "../../firebaseInit";
import "./signupStyles.scss";

const defState = () => ({
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

function Signup() {
  const [userData, setUserData] = useState({
    ...defState(),
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setUserData({ ...defState() });
    } catch (error) {
      console.log("user creation error", error);
    }
  };

  return (
    <div className="sign-up">
      <div className="title">I dont have account</div>
      <span>Sign up with your email and password</span>
      <form className="sign-up-from" onSubmit={onSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={userData.displayName}
          label="Name"
          handleChange={handleChanges}
          required
        />
        <FormInput
          name="email"
          type="email"
          value={userData.email}
          label="Email"
          handleChange={handleChanges}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userData.password}
          label="Password"
          handleChange={handleChanges}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={userData.confirmPassword}
          label="Confirm Password"
          handleChange={handleChanges}
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default Signup;
