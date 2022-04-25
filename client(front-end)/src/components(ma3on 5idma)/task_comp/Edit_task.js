import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export const Edit_task = ({ open, setopen, refetch, data }) => {
  const popup = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  //states
  const [txt_btn, setTxt_btn] = useState("edit Task");
  const [task_title, settask_title] = useState(data.task_title);
  const [task_description, settask_description] = useState(
    data.task_description
  );
  const [task_date, settask_date] = useState(data.task_date);
  //modify the task
  const edit = () => {
    setTxt_btn("wait");
  };
  return (
    <AnimatePresence>
      {open && (
        <div className="container">
          <motion.form
            variants={popup}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="form"
          >
            <a
              className="back"
              onClick={() => {
                setopen(!open);
              }}
            >
              <AiOutlineClose color="white" size={25} />
            </a>
            <h1 className="title">edit</h1>
            <h4>Task Title:</h4>
            <input
              className="input"
              onChange={(e) => {
                settask_title(e.target.value);
              }}
              type="text"
              value={task_title}
            ></input>
            <h4>Task Description:</h4>
            <textarea
              name="Text1"
              rows="5"
              className="input_textarea"
              onChange={(e) => {
                settask_description(e.target.value);
              }}
              value={task_description}
            ></textarea>
            <h4>date:</h4>
            <input
              type="date"
              onChange={(e) => {
                settask_date(e.target.value);
              }}
              className="input_date"
              value={task_date}
            ></input>
            <div className="login_box">
              <motion.button
                onClick={edit}
                whileHover={{ scale: 1.1 }}
                className="btn_login"
              >
                {txt_btn}
              </motion.button>
            </div>
          </motion.form>
        </div>
      )}
    </AnimatePresence>
  );
};
