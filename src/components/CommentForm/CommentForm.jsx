import './CommentForm.scss';
import axios from 'axios';
import Avatar from '../Avatar/Avatar';
import AddComment from '../../Assets/Icons/add_comment.svg'

function CommentForm({ currentVideo }){

    const id = currentVideo.id;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!e.target.comment.value){
            return;
        }

        axios
        .post(`https://alex-brainflix-server.herokuapp.com/api/v1/videos/${id}/comments`, {
            comment: e.target.comment.value,
            id,
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            console.log("There's an error: ", error);
        })
    }


    return(
        <div className="form">
            <div className="form__avatar"><Avatar/></div>
            <div className="form__wrap">
                <form className='form__container' onSubmit={handleSubmit} >
                    <div className="form__body">
                        <label className='form__label'> Join The Conversation </label>
                        <textarea name="comment" className='form__textarea'
                        id="form-textarea" placeholder='Add a new comment' 
                        cols="30" rows="10" ></textarea>
                    </div>
                    <button type='submit' className="form__button">
                        <img className='form__button-image' src={AddComment} alt="btn" />
                        Comment
                    </button>
                </form>
                
            </div>
        </div>
    )
}

export default CommentForm