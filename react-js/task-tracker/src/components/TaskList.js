import Task from './Task.js';

const TaskList = ({taskList, onDelete, onToggle}) => {
  return (
    <div className="tasklist">
      {taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}
 
export default TaskList;