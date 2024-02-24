import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TodoPage from "./Pages/TodoPage";
import ChallengesPage from './Pages/ChallengesPage'
import JournalPage from "./Pages/JournalPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage/>} />
          <Route path="/challenges" element={<ChallengesPage/>} />
          <Route path="/journal" element={<JournalPage/>} />
        </Routes>
</Router>
    </div>
  );
}

export default App;
