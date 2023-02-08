import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
      console.log("user creation encountered an error", error);
    }
  };

  //   console.log(formFields);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign-up with your e-mail & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="confirmPassword"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
