import { useAtom } from "jotai";
import { feedbacksAtom } from "../../atoms/feedbacks.atom";
import { Feedback } from "../../models/feedback/feedback.model";
import { useNavigate } from "react-router-dom";

interface Props {
  feedback: Feedback;
  canNavigate: boolean;
}

function FeedbackCard({ feedback, canNavigate }: Props) {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useAtom(feedbacksAtom);
  const amountOfComments = feedback.comments?.length;

  const onIncrementUpvote = (feedbackId: number): void => {
    const updatedFeedbacks = feedbacks.map((feedback: Feedback) => {
      if (feedbackId == feedback.id) {
        feedback.upvotes += 1;
      }
      return feedback;
    });

    setFeedbacks(updatedFeedbacks);
  };

  return (
    <div className=" mb:15 bg:gray-30">
      <h3>{feedback.title}</h3>
      <p>{feedback.category}</p>
      <button
        className="my:2 p:2 bg:white"
        onClick={() => onIncrementUpvote(feedback.id)}
      >
        {feedback.upvotes}
      </button>
      <p>{feedback.description}</p>
      <button
        onClick={
          canNavigate ? () => navigate(`feedback/${feedback.id}`) : () => {}
        }
      >
        <img src="/icons/comment.svg" />
      </button>
      <p>{amountOfComments}</p>
    </div>
  );
}

export default FeedbackCard;
