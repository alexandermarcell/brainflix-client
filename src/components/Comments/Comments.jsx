import axios from 'axios';
import './Comments.scss';

function Comments({comments, currentVideo}) {

    const currVidId = currentVideo.id;

    // const handleDelete = (e, comment) => {
    //     e.preventDefault();

    //     const id = comment.id;

    //     console.log(id)

    //     axios
    //     .delete(`https://alex-brainflix-server.herokuapp.com/api/v1/videos/${currVidId}/comments/${id}`, {
    //         id
    //     })
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
    
    return(
        <section className="comments">    
            {comments.map((comment) => {
                return (
                   <article key={comment.id} className="comments__container">
                       <div className="comments__avatar"></div>
                        <div className="comments__box">
                            <div className="comments__header">
                                <h3 className="comments__name"> {comment.name} </h3>
                                <p className="comments__date"> {new Date(comment.timestamp).toLocaleDateString()} </p>
                            </div>
                            <p className="comments__comment"> {comment.comment} </p>
                            {/* {
                                comment.id && <p className='comments__deletebutton' 
                                onClick={(e) => handleDelete(e, comment)} > X </p>
                            } */}
                        </div>
                   </article>
                )
            })}
        </section>
    );
}

export default Comments