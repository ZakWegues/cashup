import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Solution from './sections/Solution.jsx';
import Demo from './sections/Demo.jsx';
import Plans from './sections/Plans.jsx';
import Emotional from './sections/Emotional.jsx';
import FAQ from './sections/FAQ.jsx';
import LeadForm from './sections/LeadForm.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Demo />
        <Plans />
        <Emotional />
        <FAQ />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
