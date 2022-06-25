import { Comment } from "../../models/feedback/comment.model";
import { Feedback } from "../../models/feedback/feedback.model";

interface Props {
  feedback: Feedback;
}

function FeedbackCard({ feedback }: Props) {
  return (
    <div className=" mb:15 bg:gray-30">
      <h3>{feedback.id}</h3>
      <h3>{feedback.title}</h3>
      <p>{feedback.category}</p>
      <button>{feedback.upvotes}</button>
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
