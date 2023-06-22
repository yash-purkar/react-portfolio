
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { HomeProjects } from "./Components/HomeProjects";
import { AboutSkills } from "./Components/AboutSkills";


function App() {
  return (
    <div className="App font-mono">
      <Navbar />
      <Home />
      <AboutSkills />
      <HomeProjects />
    </div>
  );
}

export default App;
