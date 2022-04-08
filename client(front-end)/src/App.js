import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";

//pages
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { Signup } from "./pages/Signup";
import Task from "./pages/Task";

function App() {
  //send request to check if user is logged in and redirect to main page
  axios.get("http://localhost:3050/check").then((res) => {
    if (res.data.messege === "logged in") {
      Navigate("/task");
    }
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="task" element={<Task />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
