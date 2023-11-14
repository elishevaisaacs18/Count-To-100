import styles from "../LogIn.module.css";
import { useState } from "react";
const SignUp = (props) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleUserNameChange = (event) => {
    setUserNameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const key of Object.keys(localStorage)) {
      if (userNameValue === key) {
        alert("username already exist, please change it");
      }
    }
    localStorage.setItem(
        userNameValue,
      JSON.stringify({
        userName: userNameValue,
        password: passwordValue,
        scores: [],
      })
    );
  };
  return (
    <aside className={styles.logInContainer}>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="uName">User Name</label>
        <input
          required
          className={styles.inputBox}
          type="text"
          id="uName"
          name="uName"
          value={userNameValue}
          onChange={handleUserNameChange}
        ></input>
        <label htmlFor="pass">Password</label>
        <input
          required
          className={styles.inputBox}
          type="password"
          id="pass"
          name="pass"
          value={passwordValue}
          onChange={handlePasswordChange}
        ></input>
        <input
          type="submit"
          className={styles.logInBtn}
          value="Sign Up"
        ></input>
        <br />
        <button
          className={styles.logInBtn}
          onClick={() => 
            props.setInLogIn(true)}
        >
          Log In
        </button>
      </form>
    </aside>
  );
};

export default SignUp;
