import AboutMe from "./HomeComps/AboutMe";
import AskFriends from "./HomeComps/AskFriends";
import Footer from "./HomeComps/Footer";
import Hero from "./HomeComps/Hero";
import NeramSection from "./HomeComps/Neram";
import TechSkills from "./HomeComps/TechSkills";
import TimeLine from "./HomeComps/TimeLine";

export const Home = () => {
  return (
    <>
      <Hero />
      <NeramSection />
      <AboutMe />
      <TechSkills />
      <AskFriends />
      <TimeLine />
      <Footer />
    </>
  );
};
