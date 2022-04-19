import { BiPlus } from "react-icons/bi";
import { Taskdetails } from "./Taskdetails";
import { Add_task } from "./Add_task";
import { useState } from "react";
import { useQuery } from "react-query";
import { useAuth } from "../authentication/auth";
import { Task_list } from "./Task_list";
export const TaskBody = () => {
  const [open, setopen] = useState(false);
  const [task_selected, settask_selected] = useState(null);
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
  const { status, data, refetch } = useQuery("tasks", fetchtasks, {
    enabled: !!auth.user,
  });

  return (
    <div className="tbody">
      <Add_task open={open} setopen={setopen} task_fetch={refetch} />
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
        <Task_list
          data={data}
          status={status}
          settask_selected={settask_selected}
        />
      </div>
      <Taskdetails data={data} status={status} task_selected={task_selected} />
    </div>
  );
};
