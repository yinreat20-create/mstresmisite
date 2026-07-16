import { motion } from 'framer-motion';
import * as Icon from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '../data';
import { fadeUp, stagger } from '../animations';

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0b0b0b]/40">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <span className="text-ember-400 font-semibold text-sm tracking-[0.2em] uppercase">Hizmetler</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl tracking-tightest text-gradient">
          İhtiyacınız Olan Her Şey
        </h2>
        <p className="mt-4 text-gray">
          Telefon satışından teknik desteğe kadar geniş bir yelpazede hizmet veriyoruz.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      >
        {SERVICES.map((s) => {
          const I = (Icon as unknown as Record<string, LucideIcon>)[s.icon];
          return (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative p-6 sm:p-7 rounded-2xl glass-card hover:bg-white/[0.07] transition-colors"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-ember-500/15 text-ember-400 group-hover:ember-gradient group-hover:text-white transition-all duration-300">
                {I ? <I className="w-7 h-7" /> : null}
              </span>
              <h3 className="mt-5 font-display font-bold text-lg text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
