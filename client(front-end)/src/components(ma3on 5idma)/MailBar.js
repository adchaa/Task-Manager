import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MailBar = () => {

  const navigate = useNavigate();
  const [Mail,setMail] = useState("");
  return (
    <div className="email_box">
      <input type="text" className="email" onChange={(e)=>setMail(e.target.value)} placeholder="Email address" />
      <button className="btn_email" onClick={()=>{
        navigate("/signup",{state:{email:Mail}});
      }}>Get Started</button>
    </div>
  );
};
