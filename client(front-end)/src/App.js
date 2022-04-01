import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//pages
import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Signup } from "./pages/Signup";
import Task from "./pages/Task";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}/>
        <Route exact path="login" element={<Login />}/>
        <Route exact path="signup" element={<Signup />}/>
        <Route exact path="task" element={<Task />}/>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
