import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { STORE } from './data';

function WhatsAppFab() {
  const waLink = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent('Merhaba, Mesut Tekno Market hakkında bilgi almak istiyorum.')}`;
  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 group"
    >
      <motion.span
        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        className="absolute inset-0 rounded-full bg-ember-500"
      />
      <span className="relative grid place-items-center w-14 h-14 rounded-full ember-gradient text-white shadow-xl shadow-ember-500/40">
        <MessageCircle className="w-6 h-6" />
      </span>
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#111111] overflow-x-hidden">
      <div className="pointer-events-none fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-ember-500/10 blur-[120px]" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-ember-700/10 blur-[120px]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
