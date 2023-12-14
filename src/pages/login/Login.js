import { useState } from "react";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        console.log(email, password)
    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} className={styles["login-form"]}>
      <h2>Login</h2>
      <label >
        <span>email:</span>
        <input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
        value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button className="btn">Login</button>
    </form>
  );
};
