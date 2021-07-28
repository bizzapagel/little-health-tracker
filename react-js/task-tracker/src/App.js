import {useEffect, useState} from "react";
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';
import AddTask from './components/AddTask.js';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks();
      setTasks(serverTasks);
    }
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/tasks');
    const data = await res.json();
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateTask),
    })
    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task));
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
