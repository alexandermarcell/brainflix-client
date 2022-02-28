import './Button.scss';
import upLoad from '../../Assets /Icons/upload.svg';

function Button({ text, onClick }) {
  return (
    <button 
    onClick={onClick}
    className='btn'
    >
      <img
      src={upLoad}
      alt="upload-icon"
      />
      Upload
    </button>
  )
}

export default Button