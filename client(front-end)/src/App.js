import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ProtectedAuth } from "./components(ma3on 5idma)/ProtectedAuth";
import { AuthProvider } from "./components(ma3on 5idma)/auth";
import { QueryClient, QueryClientProvider } from "react-query";
//pages
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { Signup } from "./pages/Signup";
import Task from "./pages/Task";

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route
            exact
            path="task"
            element={
              <QueryClientProvider client={queryClient}>
                <ProtectedAuth>
                  <Task />
                </ProtectedAuth>
              </QueryClientProvider>
            }
          />
          <Route exact path="signup" element={<Signup />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
