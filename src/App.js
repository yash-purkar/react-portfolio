import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { HomeProjects } from "./Components/HomeProjects";
import { Skills } from "./Components/Skills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <HomeProjects />
    </div>
  );
}

export default App;
