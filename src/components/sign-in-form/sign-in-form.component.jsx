import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../context/user.context";

import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultformFields = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      // console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("password is incorrect for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign-in with your e-mail & password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="sign-in-button-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
          {/* <Button onClick={signInWithGoogleRedirect}>
            Sign in with Google Redirect
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
