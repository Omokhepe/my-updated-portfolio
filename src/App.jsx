import "./App.css";
import { HeroSection, Nav } from "./component/index.js";
import ScrollToTop from "./constant/ScrollToTop.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      {/*<ScrollToTop/>*/}
      <HeroSection />
    </div>
  );
}

export default App;
