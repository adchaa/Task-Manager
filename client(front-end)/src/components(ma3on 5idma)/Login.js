import {AiOutlineClose} from "react-icons/ai";
import "../css/login.css"
import { AnimatePresence,motion } from "framer-motion";
export const Login = ({open,setopen}) => {
  const popup ={
    hidden:{
      opacity:0,
      scale:0,
    },
    visible:{
      opacity:1,
      scale:1,
    },

  };
  return (
    <AnimatePresence>
        {open && (
          <div className='container'>
        <motion.form variants={popup} initial="hidden" animate="visible" exit="hidden" className='form'>
            <a className="back" onClick={()=>{setopen(!open)}}><AiOutlineClose color="white" size={25} /></a>
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
            <motion.button whileHover={{scale:1.1}} className="btn_login">Login</motion.button>
            </div>
        </motion.form>
        </div>)}
    </AnimatePresence>
  )
}
