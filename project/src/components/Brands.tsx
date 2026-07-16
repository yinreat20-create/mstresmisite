import { motion } from 'framer-motion';
import { BRANDS } from '../data';
import { fadeUp } from '../animations';

function BrandChip({ name }: { name: string }) {
  return (
    <div className="shrink-0 mx-2.5 px-9 py-5 rounded-2xl glass-card flex items-center justify-center min-w-[180px]">
      <span className="font-display font-semibold text-xl sm:text-2xl text-gray hover:text-white transition-colors tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default function Brands() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section id="markalar" className="relative py-24 sm:py-28 px-5 sm:px-8 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <span className="text-ember-400 font-semibold text-sm tracking-[0.2em] uppercase">Markalar</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl tracking-tightest text-gradient">
          Güvendiğiniz Markalar
        </h2>
        <p className="mt-4 text-gray">
          Dünyanın önde gelen teknoloji markalarının orijinal ürünlerini mağazamızda bulabilirsiniz.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {row.map((b, i) => (
            <BrandChip key={`a-${i}`} name={b} />
          ))}
        </div>
        <div className="flex animate-marquee-rev mt-4">
          {row.map((b, i) => (
            <BrandChip key={`b-${i}`} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
