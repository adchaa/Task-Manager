import Single_Task from "./Single_Task";
export const Task_list = ({ status, data }) => {
  if (status === "loading") {
    return <div className="title">Loading...</div>;
  }
  if (status === "error") {
    return <div>Error!</div>;
  }
  if (data) {
    data[0].task_status = "selected";
    return data.map((task) => {
      return (
        <Single_Task
          key={task.id_task}
          mode={task.task_status}
          task_desc={task.task_description}
          task_title={task.task_title}
        />
      );
    });
  }
};
