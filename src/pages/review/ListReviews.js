import React from 'react'

const ListFeedbacks = ({ feedbacks }) => {
    return (
        <div class="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {feedbacks && feedbacks.map(feedback => (
                <div key={feedback.id} class="feedback-card my-3">
                    <div class="rating-outer">
                        <div class="rating-inner" style={{ width: `${(feedback.rating / 5) * 100}%` }}></div>
                    </div>
                    <p class="feedback_comment">{feedback.feed_back}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ListFeedbacks
