import './Button.scss';
import AddComment from '../../Assets/Icons/add_comment.svg'

function ButtonAdd({onClick}){
    return(
        <button
        className='btn'
        onClick={onClick}
        >
            <img
            src={AddComment}
            alt="icon"
            />
            comment
        </button>
    )
}

export default ButtonAdd