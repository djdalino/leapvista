import "./App.css";
import { BrowserRouter as Router, Swtich, Route } from "react-router-dom";
import { commentsData } from "./data/commentData";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import SectionTwo from "./components/sectionTwo/sectionTwo";
import SectionThree from "./components/sectionThree/sectionThree";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Testimonial data={commentsData} />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
