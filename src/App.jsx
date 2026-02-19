import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Slideshow from './components/Slideshow'
const modules = import.meta.glob('../assests/*.{jpg,jpeg,png,gif,webp}', { eager: true });
console.log(modules);
const images  = Object.values(modules).map((m) => m.default);


import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      const sections = ['home', 'about', 'services', 'projects',  'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Intro />
        <Services />
        {/* <Gallery /> */}
        <Slideshow  />
        <WhyChooseUs />
        <About />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
