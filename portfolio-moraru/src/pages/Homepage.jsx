import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import PathSection from "../components/sections/PathSection";
import ShowcaseSection from "../components/sections/ShowcaseSection";
import ContactSection from "../components/sections/ContactSection";

export default function Homepage({ language, onLanguageChange, headerText, text }) {
  return (
    <>
      <HeroSection
        text={text}
        language={language}
        onLanguageChange={onLanguageChange}
        headerText={headerText}
      />
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
