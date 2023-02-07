import { useState } from "react";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign-up with your em-mail & password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          required
          type="text"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          required
          type="text"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
