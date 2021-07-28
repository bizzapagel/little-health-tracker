import {useState} from 'react';

const AddTask = ({onAdd}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!title) {
      alert('Please add a title');
      return;
    }

    onAdd({title, date, reminder});

    setTitle('');
    setDate('');
    setReminder(false);
  }

  return (
    <form className="add-task-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" placeholder="Important Task" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" placeholder="May 15th at 12:00 PM" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input 
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Create Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask;