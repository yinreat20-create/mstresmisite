import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { STORE, BUSINESS_HOURS } from '../data';
import { fadeUp, stagger } from '../animations';

export default function Contact() {
  const waLink = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent('Merhaba, Mesut Tekno Market hakkında bilgi almak istiyorum.')}`;

  const today = new Date().getDay(); // 0 = Sunday
  const todayIdx = today === 0 ? 6 : today - 1;

  const contactItems = [
    { icon: MapPin, label: 'Konum', value: STORE.address, href: STORE.mapsLink },
    { icon: Phone, label: 'Telefon', value: STORE.phoneDisplay, href: `tel:${STORE.phoneRaw}` },
    { icon: MessageCircle, label: 'WhatsApp', value: STORE.phoneDisplay, href: waLink },
  ];

  return (
    <section id="iletisim" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0b0b0b]/40">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <span className="text-ember-400 font-semibold text-sm tracking-[0.2em] uppercase">İletişim</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl tracking-tightest text-gradient">
          Bizi Ziyaret Edin
        </h2>
        <p className="mt-4 text-gray">Silopi'de teknolojinin güvenilir adresine uğrayın.</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Map + contact cards + buttons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-4"
        >
          <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden glass-card min-h-[300px]">
            <iframe
              title="Mesut Tekno Market Konum"
              src={STORE.mapsEmbed}
              className="w-full h-full min-h-[300px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {contactItems.map((it) => (
            <motion.a
              key={it.label}
              variants={fadeUp}
              href={it.href}
              target={it.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex gap-4 p-5 rounded-2xl glass-card hover:bg-white/[0.07] transition-colors"
            >
              <span className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-ember-500/15 text-ember-400 group-hover:ember-gradient group-hover:text-white transition-all">
                <it.icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-gray font-semibold">{it.label}</div>
                <div className="mt-1 text-white font-medium break-words group-hover:text-ember-400 transition-colors">
                  {it.value}
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl ember-gradient text-white font-semibold shadow-lg shadow-ember-500/25 hover:scale-[1.02] active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4.5 h-4.5" />
              WhatsApp
            </a>
            <a
              href={`tel:${STORE.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4.5 h-4.5" />
              Call Now
            </a>
            <a
              href={STORE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Navigation className="w-4.5 h-4.5" />
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Business hours */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-ember-500/15 text-ember-400">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Çalışma Saatleri</h3>
              <p className="text-sm text-gray">Haftalık çalışma saatlerimiz</p>
            </div>
          </div>

          <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col gap-2.5">
            {BUSINESS_HOURS.map((h, i) => {
              const isToday = i === todayIdx;
              return (
                <motion.li
                  key={h.day}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl glass-card transition-colors ${
                    isToday ? 'ring-1 ring-ember-500/50 bg-ember-500/[0.06]' : 'hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span className="grid place-items-center w-2 h-2 rounded-full bg-ember-500">
                        <span className="absolute w-2 h-2 rounded-full bg-ember-500 animate-ping opacity-75" />
                      </span>
                    )}
                    <span className={`font-medium ${isToday ? 'text-white' : 'text-gray'}`}>{h.day}</span>
                    {isToday && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-ember-400 bg-ember-500/15 px-2 py-0.5 rounded-full">
                        Bugün
                      </span>
                    )}
                  </div>
                  <span className={`font-medium tabular-nums ${isToday ? 'text-ember-400' : 'text-ink-200'}`}>
                    {h.hours}
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
