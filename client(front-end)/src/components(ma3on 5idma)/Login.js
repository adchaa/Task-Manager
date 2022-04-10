import { AiOutlineClose } from "react-icons/ai";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "./auth";
export const Login = ({ open, setopen }) => {
  const popup = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  //use state for username and password
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [erroruser, seterroruser] = useState("");
  const [errorpass, seterrorpass] = useState("");
  const auth = useAuth();
  //functin that redirects to task page
  let Navigate = useNavigate();
  const redirect = () => {
    Navigate("/task");
  };
  //function that checks if username and password are correct and redirects to task page
  const login_check = async () => {
    const res = await fetch("http://localhost:3050/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await res.json();

    if (data.message === "login successful") {
      console.log("logged in");
      auth.login(data.username);
      redirect();
    } else if (data.message === "username is incorrect") {
      seterroruser("username is incorrect");
      seterrorpass("");
    } else if (data.message === "password is incorrect") {
      seterrorpass("password is incorrect");
      seterroruser("");
    } else {
      console.log("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="container">
          <motion.form
            variants={popup}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="form"
          >
            <a
              className="back"
              onClick={() => {
                setopen(!open);
              }}
            >
              <AiOutlineClose color="white" size={25} />
            </a>
            <h1 className="title">LOGIN</h1>
            <h4>Username</h4>
            <input
              className="input"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
            ></input>
            <p className="error">{erroruser}</p>
            <h4>Password</h4>
            <input
              className="input"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
            ></input>
            <p className="error">{errorpass}</p>
            <div className="login_box">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  login_check();
                }}
                className="btn_login"
              >
                Login
              </motion.button>
            </div>
          </motion.form>
        </div>
      )}
    </AnimatePresence>
  );
};
