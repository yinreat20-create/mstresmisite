import { motion } from 'framer-motion';
import * as Icon from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHY_US } from '../data';
import { fadeUp, stagger } from '../animations';

export default function WhyUs() {
  return (
    <section id="neden-biz" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <span className="text-ember-400 font-semibold text-sm tracking-[0.2em] uppercase">Neden Biz?</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl tracking-tightest text-gradient">
          Neden Mesut Tekno Market?
        </h2>
        <p className="mt-4 text-gray">Güven, kalite ve profesyonellik ilkemizdir.</p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {WHY_US.map((w) => {
          const I = (Icon as unknown as Record<string, LucideIcon>)[w.icon];
          return (
            <motion.div
              key={w.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative p-7 rounded-3xl glass-card hover:bg-white/[0.07] transition-colors text-center"
            >
              <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-ember-500/15 text-ember-400 group-hover:ember-gradient group-hover:text-white transition-all duration-300">
                {I ? <I className="w-8 h-8" /> : null}
              </span>
              <h3 className="mt-5 font-display font-bold text-lg text-white">{w.title}</h3>
              <p className="mt-2 text-sm text-gray leading-relaxed">{w.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
