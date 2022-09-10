import "./App.css";
import Header from "./components/Header/";
import Projects from "./components/Projects/";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Projects />
      <Contact />
    </div>
  );
};

export default App;
