import logo from "../../resource/logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Profile_slide } from "../Profile_slide";
function NavTask() {
  return (
    <div className="navtask">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Profile_slide />
    </div>
  );
}

export default NavTask;
