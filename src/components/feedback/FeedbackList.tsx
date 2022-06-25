import React, { useEffect, useState } from "react";
import { Feedback } from "../../models/feedback/feedback.model";
import FeedbackCard from "./FeedbackCard";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const onIncrementUpvote = (feedbackId: number): void => {
    const updatedFeedbacks = feedbacks.map((feedback: Feedback) => {
      if (feedbackId == feedback.id) {
        feedback.upvotes += 1;
      }
      return feedback;
    });

    setFeedbacks(updatedFeedbacks);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        // The data.json file gets imported directly from the public folder via the "/" path
        const response = await fetch("/data.json");
        const data = await response.json();
        setFeedbacks(data.productRequests);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);
  return (
    <div className="">
      {feedbacks.map((feedback: Feedback) => (
        <FeedbackCard
          key={feedback.id}
          feedback={feedback}
          onIncrementUpvote={onIncrementUpvote}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
