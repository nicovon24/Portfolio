import {
  Hero,
	Navbar,
	About,
	Tech,
	Experience,
	Works,
	Feedbacks,
	Contact
} from "../components/index.js"

const Home = () => {
  return (
    <div className="mx-auto bg-main-blue">
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