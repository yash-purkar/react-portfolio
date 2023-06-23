
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { HomeProjects } from "./Components/HomeProjects";
import { AboutSkills } from "./Components/AboutSkills";
import { HomeBlogs } from "./Components/HomeBlogs";


function App() {
  return (
    <div className="App font-mono">
      <Navbar />
      <Home />
      <AboutSkills />
      <HomeProjects />
      <HomeBlogs />
    </div>
  );
}

export default App;
