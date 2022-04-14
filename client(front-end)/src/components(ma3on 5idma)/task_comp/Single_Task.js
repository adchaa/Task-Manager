import { MdDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { BsCheckAll } from "react-icons/bs";
function Single_Task({ mode, task_title, task_desc }) {
  const highlight_selected = (e) => {
    let selected = document.getElementsByClassName("selected");
    selected[0].classList.toggle("selected");
    e.currentTarget.classList.toggle("selected");
  };
  return (
    <div
      onClick={(e) => {
        highlight_selected(e);
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
        <MdDeleteOutline className="delete_btn" size="25px" />
      </div>
    </div>
  );
}

export default Single_Task;
