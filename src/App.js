import "./App.css";
import About from "./components/About";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      />
      <Navbar />

      <Landingpage />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
