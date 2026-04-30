import Loader from '../../components/Loader.jsx';
import Navbar from '../../components/Navbar.jsx';
import FloatingWhatsApp from '../../components/FloatingWhatsApp.jsx';
import Footer from '../../sections/Footer.jsx';
import SobreHero from './sections/SobreHero.jsx';
import SobreStory from './sections/SobreStory.jsx';
import SobreValues from './sections/SobreValues.jsx';
import SobreTeam from './sections/SobreTeam.jsx';
import SobreCTA from './sections/SobreCTA.jsx';

export default function SobreApp() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <SobreHero />
        <SobreStory />
        <SobreValues />
        <SobreTeam />
        <SobreCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
