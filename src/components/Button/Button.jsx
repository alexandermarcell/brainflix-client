import './Button.scss';

function Button({ text, onClick }) {
  return (
    <button 
    onClick={onClick}
    className='btn'
    >{text} 
    </button>
  )
}

export default Button