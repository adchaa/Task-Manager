import { MdDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { BsCheckAll } from "react-icons/bs";
function Single_Task({
  id,
  mode,
  task_title,
  task_desc,
  settask_selected,
  refetch,
}) {
  const id_task = id;
  //functions
  const delete_task = async () => {
    let res = await fetch(`http://localhost:3050/task/delete/${id_task}`, {
      method: "DELETE",
      credentials: "include",
    });
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
    settask_selected(id_task);
  };
  return (
    <div
      onClick={(e) => {
        if (e.target.matches(".task_box")) {
          highlight_selected(e);
        }
      }}
      className={"task_box " + mode}
    >
      <div className="dfg">
        <div style={{ margin: "0 5px 0 0" }}>
          <BsCheckAll
            size="20px"
            color={mode === "complited" ? "green" : "gray"}
          />
        </div>
        <div>
          <h4>{task_title}</h4>
          <p>{task_desc}</p>
        </div>
      </div>
      <div className="ed_del_btn">
        <TiEdit className="edit_btn" size="25px" />
        <MdDeleteOutline
          onClick={() => {
            delete_task();
          }}
          className="delete_btn"
          size="25px"
        />
      </div>
    </div>
  );
}

export default Single_Task;
