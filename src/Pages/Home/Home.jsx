import Contact from "../../components/Contact";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Tech from "../../components/Tech";
import Works from "../../components/Works";
import Hero from "../../components/Hero";
import { ClientReview } from "../../components";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <ClientReview />
      <Contact />
    </div>
  );
};

export default Home;
