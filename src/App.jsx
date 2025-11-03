import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Angelica Joyce L. De Matta | Cloud & DevOps Engineer</title>
        <meta name="description" content="Portfolio of Angelica Joyce L. De Matta, a Cloud, DevOps, and IT & Security Engineer showcasing AWS projects, certifications, and expertise in cloud infrastructure." />
      </Helmet>
      <div className="min-h-screen bg-background text-text">
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Certifications />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;