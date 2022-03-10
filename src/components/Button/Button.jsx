import './Button.scss';

function Button({ image, text, onClick }) {
  return (
    <button 
    type='submit'
    onClick={onClick}
    className='btn'
    >
      <img
      className='btn-image'
      src={image}
      alt="btn"
      />
      {text}
    </button>
  )
}

export default Button