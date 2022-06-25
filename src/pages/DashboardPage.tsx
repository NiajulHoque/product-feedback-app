import FeedbackList from "../components/feedback/FeedbackList";
import SuggestionsBar from "../components/SuggestionsBar";

function DashboardPage() {
  return (
    <div className="h:full w:full p:20 bg:white">
      <SuggestionsBar />
      <FeedbackList />
    </div>
  );
}

export default DashboardPage;
