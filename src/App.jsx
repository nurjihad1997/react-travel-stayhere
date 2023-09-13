import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Facility from "./Components/Facility/Facility";
import Food from "./Components/Food/Food";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Food />
      <Facility />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
