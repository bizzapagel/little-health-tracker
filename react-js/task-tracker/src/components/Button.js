const Button = ({text, bgColor, doTheThing}) => {
  return (
    <button 
      className="btn"
      style={{backgroundColor: bgColor}}
      onClick={doThething}
    >{text}</button>
  );
}

Button.defaultProps = {
  bgColor: '#000'
}
 
export default Button;