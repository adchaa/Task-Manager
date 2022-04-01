import logo from "../logo.svg"
import { Link } from "react-router-dom";
const Bar = () => {
  return (
    <div className="bar">
      <img className="logo" src={logo} alt="logo"/>
      <div className="logsign">
        <Link to="/login" style={{ textDecoration: 'none' }}><p className="login"> Login</p></Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}><p className="signup">Sign Up</p></Link>
      </div>
    </div>
  );
};

export default Bar;
