import { BiPlus, BiMinus } from "react-icons/bi";
import Single_Task from "./Single_Task";
import { Taskdetails } from "./Taskdetails";
export const TaskBody = () => {
  return (
    <div className="tbody">
      <div className="task_list">
        <div className="task_list_header">
          <h4 className="task_title">Tasks</h4>
          <div>
            <BiPlus color="#fff" size="30px" />
          </div>
        </div>
        <Single_Task
          mode="selected"
          task_text="Task 1"
          task_desc="Task 1 description"
        />
        <Single_Task
          mode="normal"
          task_text="Task 1"
          task_desc="Task 1 description"
        />
        <Single_Task
          mode="complited"
          task_text="Task 1"
          task_desc="Task 1 description"
        />
      </div>
      <Taskdetails
        tasktitle="Task 1"
        status="complited"
        desc="Task 1 description"
        date="Today, 10:00 AM"
        fulldate="10/10/2020"
      />
    </div>
  );
};
