import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { STORE } from '../data';

const NAV = [
  { href: '#anasayfa', label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#neden-biz', label: 'Neden Biz' },
  { href: '#markalar', label: 'Markalar' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-2.5' : 'py-4 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#anasayfa" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl ember-gradient shadow-lg shadow-ember-500/30">
            <span className="font-display font-extrabold text-white text-lg">M</span>
          </span>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight leading-none">
            Mesut Tekno
            <span className="block text-[10px] sm:text-xs font-medium text-ember-400 tracking-[0.2em] uppercase mt-0.5">
              Market
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray hover:text-white hover:bg-white/5 transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${STORE.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full ember-gradient text-white text-sm font-semibold shadow-lg shadow-ember-500/25 hover:scale-[1.03] active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            Bizi Arayın
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg glass text-white"
            aria-label="Menü"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <ul className="mx-4 mt-3 mb-1 glass rounded-2xl p-3 flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-ink-100 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${STORE.phoneRaw}`}
                  className="flex items-center justify-center gap-2 mt-1 px-4 py-3 rounded-xl ember-gradient text-white text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" /> Hemen Ara
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
