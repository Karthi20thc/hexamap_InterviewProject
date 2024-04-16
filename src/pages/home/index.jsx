import React, { useState } from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router-dom";
import { Box, Button, Card, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { newUserReducer } from "../../store/slice/newuserslice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 2,
};
const styleList = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "lightblue",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 2,
};

const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.newUser);

  // console.log(user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   new user form states

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  //   show user states
  const [openList, setOpenList] = React.useState(false);
  const handleOpenList = () => setOpenList(true);
  const handleCloseList = () => setOpenList(false);

  //
  const handlecreatenewuserform = (event) => {
    event.preventDefault();
    console.log(username, email, password);

    dispatch(
      newUserReducer({
        username: username,
        email: email,
        password: password,
        nationality: nationality,
      })
    );
    handleClose();
  };

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <div className={styles.homecontainer}>
      <div className={styles.homecontent}>
        <h3 style={{ fontSize: "55px" }}>Welcome to HexaMap Solutions</h3>
        <div className={styles.btncontainer}>
          <Button variant="contained" onClick={handleOpen}>
            Create User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpenList}
          >
            Show users
          </Button>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>

      {/* create user modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Create User</h2>
          <form
            action=""
            className={styles.createuserformcontainer}
            onSubmit={handlecreatenewuserform}
          >
            <input
              type="email"
              placeholder="Email"
              required
              className={styles.commoncreateuserinput}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              placeholder="UserName"
              required
              className={styles.commoncreateuserinput}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="text"
              placeholder="Nationality"
              required
              className={styles.commoncreateuserinput}
              onChange={(event) => setNationality(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={styles.commoncreateuserinput}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      {/* show user modal */}

      <Modal
        open={openList}
        onClose={handleCloseList}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleList}>
          <h2>List user </h2>

          {user?.map((ele, index) => {
            return (
              <Card key={index} className={styles.userDetailBox}>
                {/* 1 */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Username</span> <span>{ele.username}</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Nationality</span> <span>{ele.nationality}</span>
                </div>
                {/* 2 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span>Email</span> <span>{ele.email}</span>{" "}
                </div>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ marginRight: "5px" }}
                >
                  Edit
                </Button>
                <Button variant="contained" color="error" size="small">
                  Delete
                </Button>
              </Card>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default Index;
