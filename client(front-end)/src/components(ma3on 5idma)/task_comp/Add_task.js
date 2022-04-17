import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useQuery } from "react-query";
export const Add_task = ({ open, setopen }) => {
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
  const [txt_btn, setTxt_btn] = useState("Add Task");
  const [task_title, settask_title] = useState("");
  const [task_description, settask_description] = useState("");
  const [task_date, settask_date] = useState("");
  const addtask = async (e) => {
    e.preventDefault();
    setTxt_btn("Adding...");
    const res = await fetch(`http://localhost:3050/task/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task_title,
        task_description,
        task_date,
      }),
    });
    const data = await res.json();
    if (data.status === "success") {
      setTxt_btn("Add Task");
      settask_title("");
      settask_description("");
      settask_date("");
      setopen(!open);
    }
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
            <h1 className="title">ADD TASK</h1>
            <h4>Task Title:</h4>
            <input
              className="input"
              onChange={(e) => {
                settask_title(e.target.value);
              }}
              type="text"
            ></input>
            <h4>Task Description:</h4>
            <textarea
              name="Text1"
              rows="5"
              className="input_textarea"
              onChange={(e) => {
                settask_description(e.target.value);
              }}
            ></textarea>
            <h4>date:</h4>
            <input
              type="date"
              onChange={(e) => {
                settask_date(e.target.value);
              }}
              className="input_date"
            ></input>
            <div className="login_box">
              <motion.button
                onClick={addtask}
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
