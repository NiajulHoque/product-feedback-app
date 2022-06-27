import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { feedbacksAtom } from "./atoms/feedbacks.atom";
import { Outlet } from "react-router-dom";

function App() {
  const [feedbacks, setFeedbacks] = useAtom(feedbacksAtom);
  const [hasLoadedData, setHasLoadedData] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        // The data.json file gets imported directly from the public folder via the "/" path
        const response = await fetch("/data.json");
        const data = await response.json();
        setFeedbacks(data.productRequests);
      } catch (error) {
        console.error(error);
      } finally {
        setHasLoadedData(true);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {!hasLoadedData && <p>Content is Loading...</p>}
      {hasLoadedData && feedbacks.length > 0 && <Outlet />}
    </div>
  );
}

export default App;
