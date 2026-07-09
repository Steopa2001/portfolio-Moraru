import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import PathSection from "../components/sections/PathSection";
import ShowcaseSection from "../components/sections/ShowcaseSection";
import ContactSection from "../components/sections/ContactSection";

export default function Homepage({ text }) {
  return (
    <>
      <HeroSection text={text} />
      <AboutSection about={text.about} />
      <PathSection path={text.path} />
      <ShowcaseSection
        showcase={text.showcase}
        certificatesText={text.certificates}
      />
      <ContactSection contact={text.contact} />
    </>
  );
}
