import React, { useState } from "react";
import { IFeedbackCard } from "../models/feedback.model";

function FeedbackCard() {
  const feedbackCards: IFeedbackCard = {
    id: 1,
    title: "Add tags for enhancement",
    category: "upvotes",
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    comments: [
      {
        id: 1,
        content:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811",
        },
      },
    ],
  };

  return (
    <div className="h:10% w:65%@2xs position:relative bg:gray-30">
      FeedbackCard
    </div>
  );
}

export default IFeedbackCard;
