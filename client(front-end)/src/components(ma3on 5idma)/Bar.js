import logo from "../resource/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "./authentication/auth";
import { Profile_slide } from "./Profile_slide";
const Bar = ({ btn_click }) => {
  const auth = useAuth();
  return (
    <div className="bar">
      <img className="logo" src={logo} alt="logo" />
      {auth.user === null ? (
        <div className="logsign">
          <div>
            <motion.p
              onClick={btn_click}
              className="login"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              Login{" "}
            </motion.p>
          </div>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <motion.p whileHover={{ scale: 1.1 }} className="signup">
              Sign Up
            </motion.p>
          </Link>
        </div>
      ) : (
        <Profile_slide user={auth.user} />
      )}
    </div>
  );
};

export default Bar;
