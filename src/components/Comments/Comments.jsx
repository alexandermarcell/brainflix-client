import './Comments.scss';
import React from 'react';
import Avatar from '../Avatar/Avatar';

function Comments({comments}) {
    return(
        <section className="comment-section__box">    
            {comments.map((comment) => {
                return (
                   <article key={comment.id} className="comments__container">
                       <Avatar/>
                        <div className="comments__container--wrap">
                            <div className="comments__container--wrap__header">
                                <p className="comments__container--wrap__header--name">
                                    {comment.name}
                                </p>
                                <span className="comments__container--wrap__header--date">
                                    {new Date(comment.timestamp).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="comments__container--wrap__header--comment">
                                {comment.comment}
                            </p>
                        </div>
                   </article>
                )
            })}
        </section>
    );
}

export default Comments