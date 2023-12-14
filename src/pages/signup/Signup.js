import { useState } from "react";
import styles from "./Signup.module.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password, displayName);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label className={styles["login-form"]}>
        <span>email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        ></input>
      </label>
      <button className="btn">Signup</button>
    </form>
  );
};
