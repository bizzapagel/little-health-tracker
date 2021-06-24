const TaskList = ({taskList}) => {
  return (
    <div className="tasks">
      {taskList.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}
 
export default TaskList;