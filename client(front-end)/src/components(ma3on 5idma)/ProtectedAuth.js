import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.js";
import { useQuery } from "react-query";
export const ProtectedAuth = ({ children }) => {
  const auth = useAuth();
  const { data, status } = useQuery("check", auth.check);
  if (status === "loading") {
    return <div>loading</div>;
  }
  if (status === "error") {
    return <div>error</div>;
  }
  if (data.message === "not logged in") {
    return <Navigate to="/" />;
  }
  return children;
};
