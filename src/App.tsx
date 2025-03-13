import NavBar from "./components/navbar"
import About from "./pages/about"
import {Home} from "./pages/home"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Skills from "./pages/skills"
import Projects from "./pages/projects"

function App() {
  
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element = {<Home></Home>}/>
          <Route path="/about" element = {<About></About>}/>
          <Route path="/skills" element = {<Skills></Skills>}/>
          <Route path="/projects" element = {<Projects></Projects>}/>

        </Routes>
      </Router>
    </>

  )
}

export default App
