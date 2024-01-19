import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

// Olhar depois a aplicabilidade do react lazy e react suspense!

const RouterElement = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default RouterElement;
