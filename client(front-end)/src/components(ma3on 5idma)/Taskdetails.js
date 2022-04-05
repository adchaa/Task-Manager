export const Taskdetails = ({ tasktitle, status, desc, fulldate, date }) => {
  return (
    <div className="task_detail">
      <div className="task_detail_header">
        <div className="title_desc">
          <h4>{tasktitle}</h4>
          <p className="completed_status">{status}</p>
        </div>
        <div>
          <p className="date">{date}</p>
          <p className="fulldate">{fulldate}</p>
        </div>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};
