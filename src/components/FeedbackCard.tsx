import { useEffect, useState } from "react";
import { IFeedbackCard } from "../models/feedback.model";

function FeedbackCard() {
  const feedbackCardOne = {
    id: 1,
    title: "Add tags for solutions",
    category: "Enhancement",
    upvotes: 112,
    status: "Suggestion",
    description: "Easier to search for solutions based on a specific stack.",
  };

  return (
    <div className="h:10% w:65%@2xs position:relative bg:gray-30">
      <h3>{feedbackCardOne.title}</h3>
      <p>{feedbackCardOne.category}</p>
      {feedbackCardOne.upvotes}
      {feedbackCardOne.status}
      <p>{feedbackCardOne.description}</p>
    </div>
  );
}

export default FeedbackCard;
