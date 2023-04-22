import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience.jsx";
import Hero from "../components/Hero.jsx"
import Tech from "../components/Tech.jsx";
import Works from "../components/Works.jsx";

const Home = () => {
  return (
    <div className="mx-auto">
      <Hero/>
      <About/>
      <Tech/>
      <Experience/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Home;