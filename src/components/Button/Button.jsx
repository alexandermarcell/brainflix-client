import './Button.scss';

function Button({ image, text }) {
  return (
    <button 
    className='btn'
    >
      <img
      className='form__button-image'
      src={image}
      alt="btn"
      />
      {text}
    </button>
  )
}

export default Button