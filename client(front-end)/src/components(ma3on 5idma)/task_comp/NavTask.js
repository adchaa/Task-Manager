import logo from "../../resource/logo.png";
import { FaUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
function NavTask() {
  return (
    <div className="navtask">
      <img src={logo} alt="logo" />
      <div className="profile">
        <IoMdNotificationsOutline color="white" size="22px" />
        <FaUser color="white" size="20px" />
      </div>
    </div>
  );
}

export default NavTask;
