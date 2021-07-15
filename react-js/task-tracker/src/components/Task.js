import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className="{`task ${}`}" onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.title} <FaTimes onClick={() => onDelete(task.id)} /></h3>
      <p>{task.date}</p>
    </div>
  );
}
 
export default Task;