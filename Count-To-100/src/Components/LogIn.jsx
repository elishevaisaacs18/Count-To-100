import styles from "../LogIn.module.css";
const LogIn = (props) => {
  const handleUserNameChange = (event) => {
    props.setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    props.setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isUserConnected(props.userName)) {
      console.log('YOU ARE CONNECTED ALREADY. Please log out before attempting to log in again.');
      return; // Stop further processing
    }
    for (const key of Object.keys(localStorage)) {
      if (props.userName === key) {
        const currUser = JSON.parse(localStorage.getItem(key));
        console.log("currUser: ", currUser);
        if (currUser.password === props.password) {
          connectUser(currUser);
          break;
        }
      } 
      console.log("User Name:", props.userName);
      console.log("Password:", props.password);
    }
  };

  function isUserConnected(userName) {
    return props.connected.some(user => user.userName === userName);
  }

  function connectUser(user) {
    props.setConnected([
      ...props.connected,
      {
        userName: user.userName,
        scores: user.scores,
      },
    ]);
  }

  return (
    <div className={styles.logInContainer}>
      <h1>Log In</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="uName">User Name</label>
        <input
          className={styles.inputBox}
          type="text"
          id="uName"
          name="uName"
          value={props.userName}
          onChange={handleUserNameChange}
        ></input>
        <label htmlFor="pass">Password</label>
        <input
          className={styles.inputBox}
          type="password"
          id="pass"
          name="pass"
          value={props.password}
          onChange={handlePasswordChange}
        ></input>
        <input type="submit" className={styles.logInBtn} value="Log In"></input>
      </form>
    </div>
  );
};

export default LogIn;
