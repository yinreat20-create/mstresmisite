import { motion } from 'framer-motion';
import { ABOUT_IMG, STORE } from '../data';
import { fadeUp, scaleIn } from '../animations';

export default function About() {
  return (
    <section id="hakkimizda" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <img src={ABOUT_IMG} alt="Mesut Tekno Market mağazası" className="w-full h-[420px] sm:h-[540px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/60 to-transparent" />
          </div>
          <div className="absolute -top-5 -left-5 w-28 h-28 rounded-full border border-ember-500/25 -z-10" />
          <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-ember-500/10 blur-2xl -z-10" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2"
        >
          <span className="text-ember-400 font-semibold text-sm tracking-[0.2em] uppercase">Hakkımızda</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl leading-tight tracking-tightest text-gradient">
            Silopi'nin Güvenilir Teknoloji Mağazası
          </h2>
          <div className="mt-6 space-y-4 text-gray leading-relaxed">
            <p>
              {STORE.name}, Silopi'de teknoloji ihtiyaçlarınızı güvenle karşılayabileceğiniz bir mağazadır.
              Yılların getirdiği tecrübe ve müşteri odaklı hizmet anlayışıyla, bölgenin tercih edilen teknoloji
              adresi olmayı sürdürüyoruz.
            </p>
            <p>
              Orijinal ürünler, dürüst satış ve satış sonrası destek prensibiyle hareket ediyoruz. Telefon,
              bilgisayar, aksesuar ve teknoloji ürünlerinde kaliteli hizmet anlayışıyla müşterilerimize güven
              sunuyoruz. Hedefimiz, her ziyaretinizde beklentinizi karşılayan ve güven veren bir alışveriş
              deneyimi yaşatmaktır.
            </p>
            <p>
              Uzman ekibimiz, ihtiyacınıza en uygun ürünü seçmenizde size yardımcı olur ve satış sonrası teknik
              destekle yanınızda olur. {STORE.name} olarak, teknolojinin güvenilir adresi olmaya devam ediyoruz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
