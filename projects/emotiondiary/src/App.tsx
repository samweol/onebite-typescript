import { useEffect } from "react";
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
