import Loader from '../../components/Loader.jsx';
import FloatingWhatsApp from '../../components/FloatingWhatsApp.jsx';
import CardapioHero from './sections/CardapioHero.jsx';
import CardapioMenu from './sections/CardapioMenu.jsx';
import Footer from '../../sections/Footer.jsx';

export default function CardapioApp() {
  return (
    <>
      <Loader />
      <main>
        <CardapioHero />
        <CardapioMenu />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
