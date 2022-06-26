import DashboardPage from "./pages/DashboardPage";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { feedbacksAtom } from "./atoms/feedbacks.atom";
import { Outlet } from "react-router-dom";

function App() {
  const [, setFeedbacks] = useAtom(feedbacksAtom);

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
    <div>
      <Outlet />
    </div>
  );
}

export default App;
