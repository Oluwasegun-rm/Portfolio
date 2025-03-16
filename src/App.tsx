import NavBar from "./components/navbar";
import About from "./pages/about";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import { motion } from "framer-motion";
function App() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }} // Starts with opacity 0
        animate={{ opacity: 1 }} // Animates to opacity 1
        transition={{ duration: 1 }} // Takes 1 second to complete
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/skills" element={<Skills></Skills>} />
            <Route path="/projects" element={<Projects></Projects>} />
          </Routes>
        </Router>
      </motion.div>
      <div className="footer">

      </div>
    </>
  );
}

export default App;
