import "./App.css";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      />
      <Navbar />
      <Landingpage />
    </div>
  );
}

export default App;
