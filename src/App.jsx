import "./App.css";
import { HeroSection, Nav } from "./component/index.js";
import ScrollToTop from "./constant/ScrollToTop.jsx";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
      <Nav />
      {/*<ScrollToTop/>*/}
      <HeroSection />

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
        />
    </div>
  );
}

export default App;
