import {useState} from "react";
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';

function App() {
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

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TaskList taskList={tasks} />
      </div>
    </div>
  );
}

export default App;
