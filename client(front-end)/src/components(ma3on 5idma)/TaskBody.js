import { BiPlus, BiMinus } from "react-icons/bi";
import Single_Task from "./Single_Task";
export const TaskBody = () => {
  return (
    <div className="tbody">
      <div className="task_list">
        <div className="task_list_header">
          <h4 className="task_title">Tasks</h4>
          <div>
            <BiPlus color="#fff" size="30px" />
            <BiMinus color="#fff" size="30px" />
          </div>
        </div>
        <Single_Task task_text="Task 1" task_desc="Task 1 description" />
        <Single_Task task_text="Task 1" task_desc="Task 1 description" />
        <Single_Task task_text="Task 1" task_desc="Task 1 description" />
      </div>
      <div className="task_detail"></div>
    </div>
  );
};
