import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.js";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
export const Auth = ({ reverse, children }) => {
  const auth = useAuth();
  const { data, status } = useQuery("check", auth.check);
  if (status === "loading") {
    return <div className="title">loading...</div>;
  } else if (status === "error") {
    return <div className="title">error</div>;
  } else if (status === "success" && data) {
    if (reverse === true) {
      if (data.message === "logged in") {
        return <Navigate to="/" />;
      }
    } else {
      if (data.message === "not logged in") {
        return <Navigate to="/" />;
      }
    }
    return children;
  }
};
export const ProtectedAuth = ({ reverse, children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Auth reverse={reverse}>{children}</Auth>
    </QueryClientProvider>
  );
};
