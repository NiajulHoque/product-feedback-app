import { useState } from "react";
import { Comment } from "../../models/feedback/comment.model";
import { Feedback } from "../../models/feedback/feedback.model";

interface Props {
  feedback: Feedback;
  onIncrementUpvote: (feedbackId: number) => void;
}

function FeedbackCard({ feedback, onIncrementUpvote }: Props) {
  const onUpvote = (): void => {
    onIncrementUpvote(feedback.id);
  };

  return (
    <div className=" mb:15 bg:gray-30">
      <h3>{feedback.id}</h3>
      <h3>{feedback.title}</h3>
      <p>{feedback.category}</p>
      <button className="my:2 p:2 bg:white" onClick={onUpvote}>
        {feedback.upvotes}
      </button>
      <p>{feedback.description}</p>
      {feedback.comments != null &&
        feedback.comments.map((comment: Comment) => (
          <div key={comment.id}>
            <p>{comment.id}</p>
            <p>{comment.content}</p>
            <p>{comment.user.image}</p>
            <p>{comment.user.name}</p>
            <p>{comment.user.username}</p>
          </div>
        ))}
    </div>
  );
}

export default FeedbackCard;
