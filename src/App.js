import { Home } from "./Pages/Home";
import { Routes, Route } from 'react-router-dom'
import { Projects } from "./Pages/Projects";

function App() {
  console.log(1 === 2)
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
