function Single_Task({ task_text, task_desc }) {
  return (
    <div className="task_box">
      <h4>{task_text}</h4>
      <p>{task_desc}</p>
    </div>
  );
}

export default Single_Task;
