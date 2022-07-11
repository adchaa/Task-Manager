import Single_Task from "./Single_Task";
import { LoadingAnimation } from "../LoadingAnimation";
export const Task_list = ({
  status,
  data,
  settask_selected,
  task_selected,
  refetch,
}) => {
  if (status === "loading" || status === "idle") {
    return (
      <div className="center_loading">
        <LoadingAnimation size="25px" />
      </div>
    );
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
              task_selected={task_selected}
              refetch={refetch}
            />
          );
        })}
      </div>
    );
  }
};
