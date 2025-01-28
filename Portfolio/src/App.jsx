import React from 'react';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './Components/Footer';
import Education from './pages/Education';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import WelcomePage from './Components/WelcomePage';


const App = () => {
  return (
    <WelcomePage>

    <Background>
      <Navbar />
      <div className="pt-20"> {/* Prevent overlap with fixed navbar */}
        <section id="home" className="scroll-mt-20 py-12 ">
          <Home />
        </section>
        <section id="about" className="scroll-mt-20 py-0 ">
          <About />
        </section>

        <section id="education" className="scroll-mt-20 py-0 ">
          <Education />
        </section>

        <section id="portfolio" className="scroll-mt-20 py-20 mb-30">
          <Portfolio  />
        </section>

        <section id="contactme" className="scroll-mt-10 py-1">
          <ContactMe />
        </section>

        <section id="footer" className="scroll-mt-10 py-0">
          <Footer />
        </section>
      </div>
    </Background>
    </WelcomePage>
  );
};

export default App;
