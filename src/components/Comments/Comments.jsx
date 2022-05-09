import './Comments.scss';

function Comments({comments}) {

    const handleDelete = (e) => {
        e.preventDefault();

        console.log('deleted');
    }
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
                            <p className='comments__deletebutton' onClick={handleDelete} > X </p>
                        </div>
                   </article>
                )
            })}
        </section>
    );
}

export default Comments