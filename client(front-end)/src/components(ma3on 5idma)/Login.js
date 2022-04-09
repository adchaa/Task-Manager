import { AiOutlineClose } from "react-icons/ai";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
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
  //functin that redirects to task page
  let Navigate = useNavigate();
  const redirect = () => {
    Navigate("/task");
  };
  function checklogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3050/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.message === "login successful") {
          redirect();
        } else if (res.data.message === "username is incorrect") {
          seterroruser("username is incorrect");
        } else {
          seterrorpass("password is incorrect");
        }
      });
  }
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
                onClick={checklogin}
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
