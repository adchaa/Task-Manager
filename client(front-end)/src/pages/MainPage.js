import Bar from "../components(ma3on 5idma)/Bar";
import {Login} from "../components(ma3on 5idma)/Login";
import { Head } from "../components(ma3on 5idma)/Head";
import Particles from "react-tsparticles";
import conf from "./particlesjs-config.json";
import { useState } from "react";
export const MainPage = () => {
  const [isopened, setIsopened] = useState(false);
  const close_wind = () => { setIsopened(false) };
  const open_wind = () => { setIsopened(true)  };
  return (
    <div className="header">
      <Login open={isopened} setopen={setIsopened}/>
      <Bar btn_click={()=>{console.log(isopened); isopened ? close_wind() : open_wind() } }/>
      <Head />
      <Particles params={conf} className="background"/>
    </div>
  )
}


