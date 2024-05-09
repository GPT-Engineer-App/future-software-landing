import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
