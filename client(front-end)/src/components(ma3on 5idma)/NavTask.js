import logo from "../logo.svg"
import {FaUser} from "react-icons/fa"
function NavTask() {
  return (
    <div className="navtask">
        <img src={logo} alt="logo"/>
        <div className="profile">
            <FaUser color="white" size="20px"/>
        </div>
    </div>
  )
}

export default NavTask