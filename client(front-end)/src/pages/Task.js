import "../css/task.css"
import NavTask from "../components(ma3on 5idma)/NavTask"
import { TaskBody } from "../components(ma3on 5idma)/TaskBody"
import {IoIosAddCircleOutline} from "react-icons/io"
const Task = () => {
  return (
    <div>
        <NavTask />
        <TaskBody />
    </div>
  )
}

export default Task