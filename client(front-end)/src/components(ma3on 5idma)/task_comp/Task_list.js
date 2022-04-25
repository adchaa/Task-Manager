import Single_Task from "./Single_Task";
export const Task_list = ({ status, data, settask_selected, refetch }) => {
  if (status === "loading" || status === "idle") {
    return <div className="title">Loading...</div>;
  }
  if (status === "error") {
    return <div>Error!</div>;
  }
  if (data) {
    return (
      <div className="tasks">
        {data.map((task) => {
          return (
            <Single_Task
              key={task.id_task}
              data={task}
              settask_selected={settask_selected}
              refetch={refetch}
            />
          );
        })}
      </div>
    );
  }
};
