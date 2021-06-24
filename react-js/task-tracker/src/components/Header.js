import Button from './Button.js';

const Header = () => {
  const doTheThing = () => {
    console.log('click');
  }

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" bgColor="red" onClick={doTheThing} />
    </header>
  )
}

export default Header;
