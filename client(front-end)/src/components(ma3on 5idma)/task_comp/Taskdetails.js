export const Taskdetails = ({ data, status, task_selected }) => {
  if (status === "loading" || status === "idle") {
    return <div className="title">Loading...</div>;
  }
  if (status === "error") {
    return <div>Error!</div>;
  }
  if (data) {
    if (task_selected) {
      let task = data.find((task) => task.id_task === task_selected);
      let date = "Today";
      return (
        <div className="task_detail">
          <div className="task_detail_header">
            <div className="title_desc">
              <h4>{task.task_title}</h4>
              <p className="completed_status">{task.task_status}</p>
            </div>
            <div>
              <p className="date">{date}</p>
              <p className="fulldate">{task.task_date ? task.task_date : ""}</p>
            </div>
          </div>
          <div className="desc">
            <p>{task.task_description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="task_detail">
          <p>nothing is selected</p>
        </div>
      );
    }
  }
};
