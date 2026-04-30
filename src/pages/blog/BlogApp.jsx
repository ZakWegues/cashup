import { useState } from 'react';
import Loader from '../../components/Loader.jsx';
import Navbar from '../../components/Navbar.jsx';
import FloatingWhatsApp from '../../components/FloatingWhatsApp.jsx';
import BlogHero from './sections/BlogHero.jsx';
import BlogGrid from './sections/BlogGrid.jsx';
import Footer from '../../sections/Footer.jsx';

export default function BlogApp() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <BlogHero
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <BlogGrid activeCategory={activeCategory} searchQuery={searchQuery} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
