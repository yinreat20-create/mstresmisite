import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { HERO_VIDEO, HERO_POSTER, STORE } from '../data';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section id="anasayfa" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
        onCanPlay={() => setLoaded(true)}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_POSTER})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/85 via-[#0b0b0b]/60 to-[#0b0b0b]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/70 to-transparent" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display font-extrabold tracking-tightest leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
            <span className="text-gradient">MESUT TEKNO</span>
            <br />
            <span className="ember-text">MARKET</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl font-medium text-white"
          >
            {STORE.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 text-sm sm:text-base text-gray max-w-xl leading-relaxed"
          >
            {STORE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={`tel:${STORE.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full ember-gradient text-white font-semibold shadow-xl shadow-ember-500/30 hover:scale-[1.03] active:scale-95 transition-transform"
            >
              <Phone className="w-4.5 h-4.5" />
              Bizi Arayın
            </a>
            <a
              href={STORE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-4.5 h-4.5" />
              Yol Tarifi Al
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#hakkimizda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray hover:text-white transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] font-medium">Keşfet</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="grid place-items-center w-9 h-14 rounded-full border border-white/20"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
