import './Button.scss';

function Button({ image, text, onClick }) {
  return (
    <button 
    onClick={onClick}
    className='btn'
    >
      <img
      src={image}
      alt="btn"
      />
      {text}
    </button>
  )
}

export default Button