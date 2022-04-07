import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
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
            <input className="input" type="text"></input>
            <h4>Task Description:</h4>
            <textarea
              name="Text1"
              rows="5"
              className="input_textarea"
            ></textarea>
            <div className="login_box">
              <motion.button whileHover={{ scale: 1.1 }} className="btn_login">
                Add Task
              </motion.button>
            </div>
          </motion.form>
        </div>
      )}
    </AnimatePresence>
  );
};
