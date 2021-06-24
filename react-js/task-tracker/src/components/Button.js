const Button = ({text, bgColor, onClick}) => {
  return (
    <button 
      className="btn"
      style={{backgroundColor: bgColor}}
      onClick={onClick}
    >{text}</button>
  );
}

Button.defaultProps = {
  bgColor: '#000'
}
 
export default Button;