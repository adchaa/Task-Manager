import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.js";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
export const Auth = ({ reverse, children }) => {
  const auth = useAuth();
  const { data, status } = useQuery("check", auth.check);
  console.log(data);
  if (status === "loading") {
    return <div className="title">loading...</div>;
  }
  if (status === "error") {
    return <div className="title">error</div>;
  }
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
};
export const ProtectedAuth = ({ reverse, children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Auth reverse={reverse}>{children}</Auth>
    </QueryClientProvider>
  );
};
