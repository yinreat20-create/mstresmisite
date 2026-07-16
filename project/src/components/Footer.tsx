import { Instagram, Facebook, MessageCircle, Phone, MapPin } from 'lucide-react';
import { STORE } from '../data';

const LINKS = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#neden-biz', label: 'Neden Biz' },
  { href: '#markalar', label: 'Markalar' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Footer() {
  const waLink = `https://wa.me/${STORE.whatsapp}`;
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl ember-gradient shadow-lg shadow-ember-500/30">
                <span className="font-display font-extrabold text-white text-lg">M</span>
              </span>
              <span className="font-display font-bold text-lg tracking-tight">Mesut Tekno Market</span>
            </div>
            <p className="mt-4 text-sm text-gray max-w-sm leading-relaxed">{STORE.description}</p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { icon: Instagram, href: STORE.instagram, label: 'Instagram' },
                { icon: Facebook, href: STORE.facebook, label: 'Facebook' },
                { icon: MessageCircle, href: waLink, label: 'WhatsApp' },
                { icon: Phone, href: `tel:${STORE.phoneRaw}`, label: 'Telefon' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-xl glass text-gray hover:ember-gradient hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Hızlı Erişim</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray hover:text-ember-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
                <span>{STORE.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
                <a href={`tel:${STORE.phoneRaw}`} className="hover:text-ember-400 transition-colors">{STORE.phoneDisplay}</a>
              </li>
              <li className="flex gap-2.5">
                <MessageCircle className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
                <a href={waLink} target="_blank" rel="noreferrer" className="hover:text-ember-400 transition-colors">
                  WhatsApp: {STORE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray">
          <p>© {year} Mesut Tekno Market. Tüm hakları saklıdır.</p>
          <p>Silopi / Şırnak · Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
