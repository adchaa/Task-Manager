import {MdOutlineArrowBackIos} from "react-icons/md";
import { Link } from "react-router-dom";
import "../css/login.css"
export const Login = () => {
  return (
    <div className='container'>
        <form className='form'>
            <Link className="back" to="/"><MdOutlineArrowBackIos color="white" size={25} /></Link>
            <h1 className='title'>LOGIN</h1>
            <h4>Username</h4>
            <input className='input' type="text"></input>
            <h4>Password</h4>
            <input className='input' type="password"></input>
            <div className='rem_check'>
                <input type="checkbox"/>
                <label>Remember me</label>
            </div>
            <div className='login_box'>
            <button className="btn_login">Login</button>
            </div>
        </form>
    </div>
  )
}
