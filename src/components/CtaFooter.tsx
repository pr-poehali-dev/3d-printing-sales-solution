import Icon from "@/components/ui/icon";

export default function CtaFooter() {
  return (
    <>
      {/* CTA BANNER */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-14 text-center"
          style={{ background: "linear-gradient(135deg, rgba(255,45,155,0.15) 0%, rgba(0,0,0,0) 50%, rgba(0,245,255,0.15) 100%)" }}
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-neon-pink/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-neon-cyan/10 blur-3xl" />
          <div className="relative">
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">Есть своя модель?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Загрузи файл —<br />
              <span className="neon-yellow text-glow-yellow">напечатаем за 48 часов</span>
            </h2>
            <p className="text-white/40 mb-8 max-w-lg mx-auto">
              Принимаем STL, OBJ, 3MF. FDM и SLA, 50+ цветов, доставка по всей России.
            </p>
            <button className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform text-sm uppercase tracking-widest">
              <Icon name="Upload" size={16} />
              Загрузить модель
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-neon-pink flex items-center justify-center">
            <Icon name="Layers" size={12} className="text-white" />
          </div>
          <span className="font-display font-bold tracking-widest uppercase">PrintLab</span>
        </div>
        <span>© 2024 PrintLab — 3D-печать</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/50 transition-colors">Условия</a>
          <a href="#" className="hover:text-white/50 transition-colors">Контакты</a>
        </div>
      </footer>
    </>
  );
}
