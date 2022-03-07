import './CommentForm.scss';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import AddComment from '../../Assets/Icons/add_comment.svg'

function CommentForm(){
    return(
        <div className="comment">
            <div className="comment__avatar">
                <Avatar/>
            </div>
            <div className="comment-form">
                <form
                className='comment-form__wrap'
                action="/"
                >
                    <label 
                    className='comment-form__label' 
                    htmlFor="/"
                    >
                        Join The Conversation
                    </label>

                    <textarea 
                    name="comment" 
                    className='comment-form__textarea'
                    id="form-textarea" 
                    placeholder='Add a new comment' 
                    cols="30" rows="10"
                    >   
                    </textarea>
                </form>
                <div className="comment-form__button">
                    <Button
                    image={AddComment}
                    text='comment' 
                    />
                </div>
            </div>
        </div>
    )
}

export default CommentForm