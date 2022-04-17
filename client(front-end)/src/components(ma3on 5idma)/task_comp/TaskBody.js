import { BiPlus } from "react-icons/bi";
import { Taskdetails } from "./Taskdetails";
import { Add_task } from "./Add_task";
import { useState } from "react";
import { useQuery } from "react-query";
import { useAuth } from "../authentication/auth";
import { Task_list } from "./Task_list";
export const TaskBody = () => {
  const [open, setopen] = useState(false);
  const auth = useAuth();
  const fetchtasks = async () => {
    const res = await fetch(`http://localhost:3050/task/list/${auth.user}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };
  const { status, data } = useQuery("tasks", fetchtasks, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="tbody">
      <Add_task open={open} setopen={setopen} />
      <div className="task_list">
        <div className="task_list_header">
          <h4 className="task_title">Tasks</h4>
          <div>
            <BiPlus
              onClick={() => {
                setopen(!open);
              }}
              color="#fff"
              size="30px"
              cursor="pointer"
            />
          </div>
        </div>
        <Task_list data={data} status={status} />
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
