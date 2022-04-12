import { IoSettingsSharp } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";
export const Profile_slide = () => {
  const auth = useAuth();
  const logout_event = async () => {
    fetch("http://localhost:3050/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.message === "logout successful") {
        auth.logout();
        return <Navigate to="/" />;
      }
    });
  };
  let user = "";
  if (auth.user) {
    user = auth.user.charAt(0).toUpperCase() + auth.user.slice(1);
  }

  return (
    <div className="container_profile">
      <p className="profile_name">{user}</p>
      <div className="circle_bg">
        <IoSettingsSharp color="white" size="1.75em" />
      </div>
      <div className="circle_bg" onClick={logout_event}>
        <BiLogOutCircle color="white" size="1.75em" />
      </div>
    </div>
  );
};
