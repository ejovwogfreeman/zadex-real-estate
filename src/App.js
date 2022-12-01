import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, NotFound, Partners, Projects, Services, Teams, Timeline } from "./pages";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about">
            <Route index element={<About />} />
            <Route path="/about/team" element={<Teams />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/services" element={<Services />} />
          </Route>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
