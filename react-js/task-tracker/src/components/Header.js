import Button from './Button.js';

const Header = () => {

  const createTask = () => {
    console.log('Create a task');
  }

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" bgColor="red" onClick={createTask} />
    </header>
  )
}

export default Header;
