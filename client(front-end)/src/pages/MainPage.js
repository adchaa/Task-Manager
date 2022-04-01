import Bar from "../components(ma3on 5idma)/Bar";
import { Head } from "../components(ma3on 5idma)/Head";
import Particles from "react-tsparticles";
import conf from "./particlesjs-config.json";
export const MainPage = () => {
  console.log(conf);
  return (
    <div className="header">
      <Bar />
      <Head />
      <Particles params={conf} className="background"/>
    </div>
  )
}


