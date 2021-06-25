import Task from './Task.js';

const TaskList = ({taskList}) => {
  return (
    <div className="tasklist">
      {taskList.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  );
}
 
export default TaskList;