import React, { useState } from "react";

interface FeedbackCard {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: {};
}

function FeedbackCard() {
  const [feedbackCards, setFeedbackCards] = useState([]);
  return (
    <div className="h:10% w:65%@2xs position:relative bg:gray-30">
      FeedbackCard
    </div>
  );
}

export default FeedbackCard;
