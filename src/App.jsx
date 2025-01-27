import { useEffect } from "react";
import Home from "./Components/Home.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Home />;
}

export default App;
