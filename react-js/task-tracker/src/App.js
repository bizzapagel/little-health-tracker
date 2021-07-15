import {useState} from "react";
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';
import AddTask from './components/AddTask.js';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        title: 'Doctor Appointment',
        date: 'Feb 5th at 2:30 PM',
        reminder: true,
        id: 1,
      },
      {
        title: 'Meeting at School',
        date: 'Feb 6th at 1:30 PM',
        reminder: true,
        id: 2,
      },
      {
        title: 'Food Shopping',
        date: 'Feb 7th at 3:30 PM',
        reminder: false,
        id: 3,
      }
    ]
  );

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="App">
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <TaskList taskList={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          <p>No tasks to display</p>
        )}
      </div>
    </div>
  );
}

export default App;
