import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Metrics } from './components/home/Metrics';
import { Pricing } from './components/home/Pricing';
import { Testimonials } from './components/home/Testimonials';
import { FAQ } from './components/home/FAQ';
import { ForumPreview } from './components/home/ForumPreview';
import { Contact } from './components/home/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <Metrics />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="forum">
          <ForumPreview />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;