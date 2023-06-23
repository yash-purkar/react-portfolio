
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { HomeProjects } from "./Components/HomeProjects";
import { AboutSkills } from "./Components/AboutSkills";
import { HomeBlogs } from "./Components/HomeBlogs";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div className="App font-mono">
      <Navbar />
      <Home />
      <AboutSkills />
      <HomeProjects />
      <HomeBlogs />
      <Footer />
    </div>
  );
}

export default App;
