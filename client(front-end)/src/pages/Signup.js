import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import verif from "../components(ma3on 5idma)/utils";
import Particles from "react-tsparticles";
import conf from "../resource/particlesjs-config.json";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components(ma3on 5idma)/authentication/auth";
export const Signup = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  //states
  const auth = useAuth();
  const [mail, setmail] = useState(state != null ? state.email : "");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [Confirm_password, setConfirm_password] = useState("");
  const [tos, settos] = useState(false);
  const [error_username, setError_username] = useState("");
  const [error_mail, setError_mail] = useState("");
  const [error_password, setError_password] = useState("");
  const [error_password2, setError_password2] = useState("");
  const [error_tos, setError_tos] = useState("");
  //functions
  const send = async (data) => {
    let res = await fetch("http://localhost:3050/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        email: data.mail,
      }),
    });
    res = await res.json();
    if (res.message === "user added successfully") {
      auth.login(data.username);
      navigate("/task");
    }
  };
  function show_error(error) {
    if (error[0]) {
      setError_username("Username must only contain letters and numbers");
    } else {
      setError_username("");
    }
    if (error[1]) {
      setError_mail("mail is invalid");
    } else {
      setError_mail("");
    }
    if (error[2]) {
      setError_password("password is invalid");
    } else {
      setError_password("");
    }
    if (error[3]) {
      setError_password2("Confirm Password must be identical to Password");
    } else {
      setError_password2("");
    }
    if (error[4]) {
      setError_tos("you need to agree to the terms and conditions");
    } else {
      setError_tos("");
    }
  }
  function check(e) {
    e.preventDefault();
    const data = {
      mail: mail,
      username: username,
      password: password,
      password2: Confirm_password,
      tos: tos,
    };
    const errors = verif(data);
    show_error(errors);
    if (errors.indexOf(true) === -1) {
      send(data);
    }
  }
  return (
    <div className="container">
      <Particles params={conf} className="background" />
      <form className="inv form">
        <Link className="back" to="/">
          <AiOutlineClose color="white" size={25} />
        </Link>
        <h1 className="title">Sign Up</h1>
        <h4>Username</h4>
        <input
          className="input"
          type="text"
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <span className="error">{error_username}</span>
        <h4>Email</h4>
        <input
          className="input"
          type="email"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
        />
        <span className="error">{error_mail}</span>
        <h4>Password</h4>
        <input
          className="input"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <span className="error">{error_password}</span>
        <h4>Confirm Password</h4>
        <input
          className="input"
          type="password"
          onChange={(e) => setConfirm_password(e.target.value)}
        ></input>
        <span className="error">{error_password2}</span>
        <div className="rem_check">
          <input onChange={(e) => settos(e.target.checked)} type="checkbox" />
          <label>i agree to the terms and conditions</label>
        </div>
        <span className="error">{error_tos}</span>
        <div className="login_box">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={(e) => check(e)}
            className="btn_login"
          >
            Sign Up
          </motion.button>
        </div>
      </form>
    </div>
  );
};
