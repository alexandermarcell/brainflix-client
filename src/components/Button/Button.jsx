import './Button.scss';

function Button({ image, text }) {
  return (
    <button 
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