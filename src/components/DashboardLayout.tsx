import React from "react";
import FeedbackCard from "./FeedbackCard";
import SuggestionsBar from "./SuggestionsBar";

function DashboardLayout() {
  return (
    <div className="h:full w:full p:20 position:fixed bg:white">
      <SuggestionsBar />
      <FeedbackCard />
    </div>
  );
}

export default DashboardLayout;
