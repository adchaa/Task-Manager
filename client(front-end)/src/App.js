import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

//pages
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { Signup } from "./pages/Signup";
import Task from "./pages/Task";
axios.defaults.withCredentials = true;

function App() {
  const [logged, setlogged] = useState(false);
  axios.get("http://localhost:3050/check").then((res) => {
    if (res.data.message === "logged in") {
      setlogged(true);
    } else {
      setlogged(false);
    }
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage login={logged} />} />
        <Route exact path="task" element={<Task login={logged} />} />
        <Route exact path="signup" element={<Signup />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
