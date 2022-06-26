import { useAtom } from "jotai";
import { feedbacksAtom } from "../../atoms/feedbacks.atom";
import { Feedback } from "../../models/feedback/feedback.model";
import FeedbackCard from "./FeedbackCard";

function FeedbackList() {
  const [feedbacks] = useAtom(feedbacksAtom);

  return (
    <div className="">
      {feedbacks.map((feedback: Feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} canNavigate />
      ))}
    </div>
  );
}

export default FeedbackList;
