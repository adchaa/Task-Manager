import "../css/task.css";
import NavTask from "../components(ma3on 5idma)/task_comp/NavTask";
import { TaskBody } from "../components(ma3on 5idma)/task_comp/TaskBody";
import { Navigate } from "react-router-dom";
const Task = () => {
  return (
    <div>
      <NavTask />
      <TaskBody />
    </div>
  );
};

export default Task;
