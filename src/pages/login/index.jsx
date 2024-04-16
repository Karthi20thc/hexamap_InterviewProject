import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, Card } from "@mui/material";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../store/slice/newuserslice";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const HandleLoginSubmit = () => {
    dispatch(loginReducer({ value: true }));
    password === "admin" && username === "admin"
      ? history.push("/home")
      : history.push("/");
  };
  return (
    <div className={styles.loginmaincontainer}>
      <form className={styles.loginFormcontainer} onSubmit={HandleLoginSubmit}>
        <h2>HexaMap Solutions</h2>
        <input
          type="text"
          placeholder="username"
          required
          className={styles.commoninput}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="password"
          className={styles.commoninput}
          placeholder="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Index;
