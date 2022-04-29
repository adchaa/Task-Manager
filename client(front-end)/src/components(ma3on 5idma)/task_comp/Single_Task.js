import { MdDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { CheckIcon } from "./CheckIcon";
import { Edit_task } from "./Edit_task";
import { useAuth } from "../authentication/auth";
import { useState } from "react";
function Single_Task({ data, settask_selected, refetch }) {
  const task_data = data;
  const auth = useAuth();
  const [open, setopen] = useState(false);
  console.log("status=" + task_data.task_status);
  const [checked, setchecked] = useState(task_data.task_status === "completed");
  //functions
  const complite_task = async () => {
    const res = await fetch(`http://localhost:3050/task/check`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: auth.user,
        id: task_data.id_task,
        status: task_data.task_status,
      }),
    });
    if (res.status === 200) {
      setchecked(!checked);
      refetch();
    }
  };
  const delete_task = async () => {
    let res = await fetch(
      `http://localhost:3050/task/delete/${task_data.id_task}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    res = await res.json();
    if (res.message === "deleted the task successfully") {
      console.log("deleted succ");
      refetch();
    }
  };
  const highlight_selected = (e) => {
    let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
      selected[0].classList.toggle("selected");
    }
    e.currentTarget.classList.toggle("selected");
    settask_selected(task_data.id_task);
  };
  return (
    <>
      <Edit_task open={open} setopen={setopen} refetch={refetch} data={data} />
      <div
        onClick={(e) => {
          if (e.target.matches(".task_box")) {
            highlight_selected(e);
          }
        }}
        className={"task_box " + task_data.task_status}
      >
        <div className="dfg">
          <div
            onClick={complite_task}
            style={{ margin: "0 10px 0 0", cursor: "pointer" }}
          >
            <CheckIcon size="22px" mode={checked} />
          </div>
          <div>
            <h4>{task_data.task_title}</h4>
            <p>{task_data.task_description.substring(0, 25)}</p>
          </div>
        </div>
        <div className="ed_del_btn">
          <TiEdit
            onClick={() => {
              setopen(!open);
            }}
            className="edit_btn"
            size="25px"
          />
          <MdDeleteOutline
            onClick={() => {
              delete_task();
            }}
            className="delete_btn"
            size="25px"
          />
        </div>
      </div>
    </>
  );
}

export default Single_Task;
