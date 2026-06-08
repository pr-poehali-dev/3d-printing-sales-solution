import { MARQUEE_ITEMS } from "@/data/technologies";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-slide-up" style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-pink/30 bg-neon-pink/10 text-xs text-neon-pink font-semibold mb-6 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse-glow inline-block" />
              3D-печать нового поколения
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold leading-none mb-6 text-white uppercase tracking-tight">
              Печатаем<br />
              <span className="neon-pink text-glow-pink">любые</span><br />
              идеи
            </h1>
            <p className="text-white/50 text-lg mb-8 max-w-md leading-relaxed">
              FDM и SLA-печать, широкий выбор материалов и постобработка — от прототипа до готового изделия.
            </p>
            <div className="flex gap-4">
              <a href="#catalog">
                <button className="bg-neon-pink text-white font-bold px-8 py-3.5 rounded-full glow-pink hover:scale-105 transition-transform text-sm uppercase tracking-widest">
                  Подобрать материал
                </button>
              </a>
              <button className="border border-white/20 text-white/70 font-semibold px-8 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-all text-sm uppercase tracking-widest">
                Наши работы
              </button>
            </div>
          </div>

          <div className="relative opacity-0 animate-slide-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="absolute inset-0 rounded-3xl bg-neon-pink/20 blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 animate-float">
              <img
                src="https://cdn.poehali.dev/projects/6a5c0d3e-d69b-4167-8d9f-bca1ca469a25/files/c5fbfd30-4247-4aa3-8d6d-707acdc1a090.jpg"
                alt="3D печать"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {[{ v: "500+", l: "проектов" }, { v: "48ч", l: "срок" }, { v: "2", l: "технологии" }].map((s) => (
                  <div key={s.l} className="flex-1 bg-black/60 backdrop-blur-md rounded-xl p-3 text-center border border-white/10">
                    <div className="font-display text-xl font-bold neon-cyan">{s.v}</div>
                    <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden py-4 border-y border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6 font-display text-sm font-semibold tracking-widest uppercase text-white/20">
              {item}
              <span className="w-1 h-1 rounded-full bg-neon-pink/50 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
