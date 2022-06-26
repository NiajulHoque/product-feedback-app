import FeedbackCard from "../components/feedback/FeedbackCard";
import FeedbackCommentsList from "../components/feedback/FeedbackCommentsList";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { feedbacksAtom } from "../atoms/feedbacks.atom";
import { Feedback } from "../models/feedback/feedback.model";
import { Comment } from "../models/feedback/comment.model";
// This component will display all comments for a feedback in a separate page along with the feedback at the top. Routing needs to be done for this component.
// PARENT of 'FeedbackCommentsList'.

function FeedbackPage() {
  const { id } = useParams();
  const [feedbacks] = useAtom(feedbacksAtom);
  const [feedback, setFeedback] = useState<Feedback>(null as any);

  useEffect(() => {
    const feedbackFound = feedbacks.find(
      (feedback: Feedback) => parseInt(id as string) == feedback.id
    ) as Feedback;
    setFeedback(feedbackFound);
  }, []);

  return (
    <div>
      {feedback != null && (
        <>
          <FeedbackCard feedback={feedback} canNavigate={false} />
          <FeedbackCommentsList comments={feedback.comments as Comment[]} />
        </>
      )}
    </div>
  );
}

export default FeedbackPage;
