import { useEffect, useState } from "react";
// import { IFeedbackCard } from "../models/feedback.model";

function FeedbackCard() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/feedbackCards")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="h:10% w:65%@2xs position:relative bg:gray-30">
      {typeof backendData.feedbackCards === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.feedbackCards.map((feedbackCard: string, index: number) => (
          <p key={index}>{feedbackCard}</p>
        ))
      )}
    </div>
  );
}

export default FeedbackCard;
