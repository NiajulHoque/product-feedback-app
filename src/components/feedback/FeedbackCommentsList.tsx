import { Comment } from "../../models/feedback/comment.model";

// This component will contain a list of comments for one feedback.
// CHILD of 'CommentsPage'.

interface Props {
  comments: Comment[];
}

function FeedbackCommentsList({ comments }: Props) {
  return (
    <div>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          <img src={comment.user.image} />
          <p>{comment.user.name}</p>
          <p>{comment.user.username}</p>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackCommentsList;
