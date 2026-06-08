import { useState } from "react";
import Icon from "@/components/ui/icon";

const MATERIALS = [
  {
    id: 1,
    name: "PLA Стандарт",
    category: "material",
    tag: "Популярный",
    tagColor: "bg-neon-pink",
    price: "от 299 ₽/100г",
    description: "Лёгкий в печати, экологичный биопластик. Подходит для прототипов и декора.",
    colors: ["#ff2d9b", "#00f5ff", "#ffe600", "#ffffff", "#39ff14"],
    specs: [{ label: "Темп. печати", value: "190–220°C" }, { label: "Жёсткость", value: "Средняя" }, { label: "Цветов", value: "20+" }],
    glow: "glow-pink",
    accent: "var(--neon-pink)",
  },
  {
    id: 2,
    name: "ABS Прочный",
    category: "material",
    tag: "Прочный",
    tagColor: "bg-neon-cyan text-black",
    price: "от 349 ₽/100г",
    description: "Жаростойкий и ударопрочный пластик. Идеален для функциональных деталей.",
    colors: ["#0a0a0a", "#ffffff", "#ff6a00", "#888888"],
    specs: [{ label: "Темп. печати", value: "230–250°C" }, { label: "Жёсткость", value: "Высокая" }, { label: "Темп. стойкость", value: "до 100°C" }],
    glow: "glow-cyan",
    accent: "var(--neon-cyan)",
  },
  {
    id: 3,
    name: "PETG Гибкий",
    category: "material",
    tag: "Гибкий",
    tagColor: "bg-neon-yellow text-black",
    price: "от 399 ₽/100г",
    description: "Сочетает гибкость и прочность. Пищевой класс, влагостойкий.",
    colors: ["#ffe600", "#ff6a00", "#00f5ff", "#ffffff"],
    specs: [{ label: "Темп. печати", value: "220–245°C" }, { label: "Гибкость", value: "Средняя" }, { label: "Влагостойкость", value: "✓ Да" }],
    glow: "glow-yellow",
    accent: "var(--neon-yellow)",
  },
  {
    id: 4,
    name: "Печать под заказ",
    category: "service",
    tag: "Услуга",
    tagColor: "bg-neon-pink",
    price: "от 500 ₽",
    description: "Загрузите вашу 3D-модель — напечатаем в нужном материале и цвете.",
    colors: [],
    specs: [{ label: "Срок", value: "1–3 дня" }, { label: "Форматы", value: "STL, OBJ" }, { label: "Объём", value: "25×25×25 см" }],
    glow: "glow-pink",
    accent: "var(--neon-pink)",
  },
  {
    id: 5,
    name: "Постобработка",
    category: "service",
    tag: "Услуга",
    tagColor: "bg-neon-cyan text-black",
    price: "от 300 ₽",
    description: "Шлифовка, покраска, склейка, эпоксидное покрытие — доводим до идеала.",
    colors: [],
    specs: [{ label: "Шлифовка", value: "✓ Ручная" }, { label: "Покраска", value: "✓ Аэрограф" }, { label: "Покрытие", value: "✓ Эпоксид" }],
    glow: "glow-cyan",
    accent: "var(--neon-cyan)",
  },
  {
    id: 6,
    name: "Resin Фотополимер",
    category: "material",
    tag: "Детальный",
    tagColor: "bg-neon-green text-black",
    price: "от 599 ₽/100мл",
    description: "Сверхточная фотополимерная смола. Для ювелирки, миниатюр и мелких деталей.",
    colors: ["#39ff14", "#ffffff", "#ff2d9b", "#888888"],
    specs: [{ label: "Точность", value: "0.05 мм" }, { label: "Тип", value: "MSLA/SLA" }, { label: "Поверхность", value: "Гладкая" }],
    glow: "glow-pink",
    accent: "var(--neon-green)",
  },
];

const FILTERS = [
  { id: "all", label: "Все" },
  { id: "material", label: "Материалы" },
  { id: "service", label: "Услуги" },
];

const MARQUEE_ITEMS = ["PLA", "ABS", "PETG", "RESIN", "TPU", "Nylon", "Carbon", "HIPS", "ASA", "PC"];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? MATERIALS
    : MATERIALS.filter((m) => m.category === activeFilter);

  return (
    <div className="min-h-screen gradient-mesh noise-overlay relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neon-pink glow-pink flex items-center justify-center">
            <Icon name="Layers" size={16} className="text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-widest uppercase text-white">
            Print<span className="neon-pink">Lab</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium">
          <a href="#catalog" className="hover:text-white transition-colors">Каталог</a>
          <a href="#" className="hover:text-white transition-colors">Проекты</a>
          <a href="#" className="hover:text-white transition-colors">О нас</a>
        </div>
        <button className="bg-neon-pink text-white text-sm font-semibold px-5 py-2 rounded-full glow-pink hover:scale-105 transition-transform">
          Заказать
        </button>
      </nav>

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
              Материалы, услуги печати и постобработка — всё в одном месте. От прототипа до готового изделия.
            </p>
            <div className="flex gap-4">
              <button className="bg-neon-pink text-white font-bold px-8 py-3.5 rounded-full glow-pink hover:scale-105 transition-transform text-sm uppercase tracking-widest">
                Начать заказ
              </button>
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
                {[
                  { v: "500+", l: "проектов" },
                  { v: "48ч", l: "срок" },
                  { v: "6", l: "материалов" },
                ].map((s) => (
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

      {/* CATALOG */}
      <section id="catalog" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">Каталог</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Материалы &<br />
              <span className="neon-cyan text-glow-cyan">Услуги</span>
            </h2>
          </div>
          <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === f.id
                    ? "bg-neon-pink text-white glow-pink"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden card-hover cursor-pointer opacity-0 animate-fade-in-scale"
              style={{
                animationDelay: `${idx * 0.08}s`,
                animationFillMode: "forwards",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: `1px solid ${hoveredId === item.id ? item.accent : "rgba(255,255,255,0.08)"}`,
                boxShadow: hoveredId === item.id ? `0 0 30px ${item.accent === "var(--neon-pink)" ? "rgba(255,45,155,0.2)" : item.accent === "var(--neon-cyan)" ? "rgba(0,245,255,0.2)" : "rgba(255,230,0,0.2)"}` : "none",
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-0.5 w-full" style={{ background: item.accent }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${item.tagColor} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon
                      name={item.category === "service" ? "Wrench" : "Package"}
                      size={14}
                      className="text-white/40"
                    />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-2">
                  {item.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{item.description}</p>

                {item.colors.length > 0 && (
                  <div className="flex items-center gap-2 mb-5">
                    {item.colors.map((c) => (
                      <div
                        key={c}
                        className="w-5 h-5 rounded-full border-2 border-white/10"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                    <span className="text-white/25 text-xs ml-1">и другие</span>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {item.specs.map((s) => (
                    <div key={s.label} className="bg-white/4 rounded-xl p-2.5 text-center">
                      <div className="text-xs font-bold mb-0.5" style={{ color: item.accent }}>
                        {s.value}
                      </div>
                      <div className="text-white/30 text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-white">{item.price}</span>
                  <button
                    className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-105"
                    style={{
                      backgroundColor: item.accent,
                      color: item.accent === "var(--neon-yellow)" || item.accent === "var(--neon-green)" ? "#0a0a0a" : "#ffffff",
                    }}
                  >
                    {item.category === "service" ? "Заказать" : "Выбрать"}
                    <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, rgba(255,45,155,0.15) 0%, rgba(0,0,0,0) 50%, rgba(0,245,255,0.15) 100%)" }}>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-neon-pink/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-neon-cyan/10 blur-3xl" />
          <div className="relative">
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">Есть своя модель?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Загрузи файл —<br />
              <span className="neon-yellow text-glow-yellow">напечатаем за 48 часов</span>
            </h2>
            <p className="text-white/40 mb-8 max-w-lg mx-auto">
              Принимаем форматы STL, OBJ, 3MF. Более 6 материалов, 50+ цветов, доставка по всей России.
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
    </div>
  );
}
