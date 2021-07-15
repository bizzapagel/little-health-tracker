import Button from './Button.js';

const Header = ({onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button 
        text={showAdd ? 'Cancel' : 'Add'}
        bgColor={showAdd ? 'red' : 'green'} 
        onClick={onAdd}
      />
    </header>
  )
}

export default Header;
