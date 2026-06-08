import { useState } from "react";
import Icon from "@/components/ui/icon";

const MATERIALS = [
  {
    id: 1,
    name: "PLA",
    fullName: "Полилактид",
    tag: "Самый популярный",
    tagColor: "bg-neon-pink",
    accent: "var(--neon-pink)",
    accentRgb: "255,45,155",
    emoji: "🌿",
    description: "Для всего, что не греется и не нагружается. Статуэтки, держатели, прототипы.",
    subtypes: [
      {
        name: "PLA Стандарт",
        note: "Обычный — самый простой и доступный",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#ff2d9b", name: "Розовый" },
          { hex: "#00f5ff", name: "Голубой" },
          { hex: "#ffe600", name: "Жёлтый" },
          { hex: "#39ff14", name: "Зелёный" },
          { hex: "#ff6a00", name: "Оранжевый" },
          { hex: "#7c3aed", name: "Фиолетовый" },
        ],
      },
      {
        name: "PLA Silk",
        note: "Шёлковый — блестит как металл",
        colors: [
          { hex: "#c0a060", name: "Золото" },
          { hex: "#c0c0c0", name: "Серебро" },
          { hex: "#b87333", name: "Медь" },
          { hex: "#ff2d9b", name: "Розовое золото" },
        ],
      },
      {
        name: "PLA Matte",
        note: "Матовый — без бликов, «мягкий» вид",
        colors: [
          { hex: "#f5f0eb", name: "Молочный" },
          { hex: "#2a2a2a", name: "Антрацит" },
          { hex: "#5c8a5c", name: "Хаки" },
          { hex: "#8a6a5c", name: "Терракота" },
          { hex: "#4a6a8a", name: "Синий туман" },
        ],
      },
    ],
    props: [
      { icon: "Thermometer", label: "Не подходит для жары", note: "до 60°C" },
      { icon: "Leaf", label: "Биоразлагаемый", note: "экологичный" },
      { icon: "Zap", label: "Легко печатать", note: "новичкам ок" },
    ],
  },
  {
    id: 2,
    name: "ABS",
    fullName: "Акрилонитрил",
    tag: "Прочный",
    tagColor: "bg-neon-cyan text-black",
    accent: "var(--neon-cyan)",
    accentRgb: "0,245,255",
    emoji: "🔩",
    description: "Для деталей, которые нагружаются. Корпуса, крепления, автозапчасти.",
    subtypes: [
      {
        name: "ABS Стандарт",
        note: "Ударопрочный и жаростойкий",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#ff6a00", name: "Оранжевый" },
          { hex: "#888888", name: "Серый" },
          { hex: "#1a3a6a", name: "Синий" },
          { hex: "#6a1a1a", name: "Красный" },
        ],
      },
      {
        name: "ASA",
        note: "Как ABS, но ещё и на улице — УФ-стойкий",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#888888", name: "Серый" },
          { hex: "#c8a060", name: "Бежевый" },
        ],
      },
    ],
    props: [
      { icon: "Flame", label: "Жаростойкость", note: "до 100°C" },
      { icon: "Shield", label: "Ударопрочный", note: "сложно сломать" },
      { icon: "Drill", label: "Можно сверлить", note: "и нарезать резьбу" },
    ],
  },
  {
    id: 3,
    name: "PETG",
    fullName: "Полиэтилентерефталат",
    tag: "Универсальный",
    tagColor: "bg-neon-yellow text-black",
    accent: "var(--neon-yellow)",
    accentRgb: "255,230,0",
    emoji: "💧",
    description: "Золотая середина. Прочнее PLA, проще ABS. Контакт с едой и водой — окей.",
    subtypes: [
      {
        name: "PETG Стандарт",
        note: "Немного гибкий, влагостойкий",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#ffe600", name: "Жёлтый" },
          { hex: "#00f5ff", name: "Прозрачный голубой" },
          { hex: "#ff6a00", name: "Оранжевый" },
          { hex: "#39ff14", name: "Зелёный" },
        ],
      },
      {
        name: "PETG Прозрачный",
        note: "Почти как стекло — для линз и колб",
        colors: [
          { hex: "rgba(255,255,255,0.15)", name: "Прозрачный" },
          { hex: "rgba(0,245,255,0.3)", name: "Голубой прозрачный" },
          { hex: "rgba(255,230,0,0.3)", name: "Жёлтый прозрачный" },
        ],
      },
    ],
    props: [
      { icon: "Droplets", label: "Влагостойкий", note: "можно мыть" },
      { icon: "UtensilsCrossed", label: "Пищевой класс", note: "контакт с едой" },
      { icon: "ArrowUpDown", label: "Гибкость", note: "не ломается резко" },
    ],
  },
  {
    id: 4,
    name: "TPU",
    fullName: "Термополиуретан",
    tag: "Резиноподобный",
    tagColor: "bg-neon-green text-black",
    accent: "var(--neon-green)",
    accentRgb: "57,255,20",
    emoji: "🫳",
    description: "Тянется, гнётся, не ломается. Чехлы, прокладки, уплотнители, ручки.",
    subtypes: [
      {
        name: "TPU Мягкий (Shore 85A)",
        note: "Очень гибкий — как резина",
        colors: [
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#ffffff", name: "Белый" },
          { hex: "#ff2d9b", name: "Розовый" },
          { hex: "#ff6a00", name: "Оранжевый" },
        ],
      },
      {
        name: "TPU Жёсткий (Shore 95A)",
        note: "Полужёсткий — упругий, держит форму",
        colors: [
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#888888", name: "Серый" },
          { hex: "#00f5ff", name: "Голубой" },
        ],
      },
    ],
    props: [
      { icon: "Repeat", label: "Тянется и гнётся", note: "300% эластичность" },
      { icon: "ShieldCheck", label: "Износостойкий", note: "долго служит" },
      { icon: "Smartphone", label: "Для чехлов", note: "и уплотнений" },
    ],
  },
  {
    id: 5,
    name: "Resin",
    fullName: "Фотополимер",
    tag: "Сверхточный",
    tagColor: "bg-neon-pink",
    accent: "var(--neon-pink)",
    accentRgb: "255,45,155",
    emoji: "💎",
    description: "Для сверхмелких деталей. Ювелирка, фигурки, зубные модели, мастер-модели.",
    subtypes: [
      {
        name: "Стандартный Resin",
        note: "Гладкая поверхность, точность 0.05мм",
        colors: [
          { hex: "#f5f0e8", name: "Телесный" },
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#888888", name: "Серый" },
        ],
      },
      {
        name: "ABS-like Resin",
        note: "Прочнее — меньше хрупкости",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#c8c8c8", name: "Светло-серый" },
          { hex: "#0a0a0a", name: "Чёрный" },
        ],
      },
      {
        name: "Прозрачный Resin",
        note: "Почти стекло, под полировку",
        colors: [
          { hex: "rgba(255,255,255,0.12)", name: "Прозрачный" },
          { hex: "rgba(0,245,255,0.25)", name: "Голубой" },
          { hex: "rgba(255,45,155,0.25)", name: "Розовый" },
        ],
      },
    ],
    props: [
      { icon: "ScanLine", label: "Точность 0.05мм", note: "мельчайшие детали" },
      { icon: "Gem", label: "Для ювелирки", note: "и мастер-моделей" },
      { icon: "Eye", label: "Гладкая поверхность", note: "почти без слоёв" },
    ],
  },
];

const MARQUEE_ITEMS = ["PLA", "ABS", "PETG", "RESIN", "TPU", "Nylon", "Carbon", "HIPS", "ASA", "PC"];

export default function Index() {
  const [activeId, setActiveId] = useState<number>(1);
  const [activeSubtype, setActiveSubtype] = useState<number>(0);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const activeMaterial = MATERIALS.find((m) => m.id === activeId)!;
  const currentSubtype = activeMaterial.subtypes[activeSubtype];

  const handleMaterialChange = (id: number) => {
    setActiveId(id);
    setActiveSubtype(0);
    setHoveredColor(null);
  };

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
          <a href="#catalog" className="hover:text-white transition-colors">Материалы</a>
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
                {[{ v: "500+", l: "проектов" }, { v: "48ч", l: "срок" }, { v: "5", l: "материалов" }].map((s) => (
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
        <div className="mb-12">
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">Материалы в наличии</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
            Выбери — и<br />
            <span className="neon-cyan text-glow-cyan">сразу поймёшь</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* LEFT: material tabs */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {MATERIALS.map((m) => (
              <button
                key={m.id}
                onClick={() => handleMaterialChange(m.id)}
                className="flex-shrink-0 lg:w-full text-left rounded-2xl p-4 transition-all border"
                style={{
                  backgroundColor: activeId === m.id ? `rgba(${m.accentRgb},0.12)` : "rgba(255,255,255,0.03)",
                  borderColor: activeId === m.id ? `rgba(${m.accentRgb},0.5)` : "rgba(255,255,255,0.08)",
                  boxShadow: activeId === m.id ? `0 0 20px rgba(${m.accentRgb},0.15)` : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.emoji}</span>
                  <div>
                    <div className="font-display text-lg font-bold text-white tracking-wider">{m.name}</div>
                    <div className="text-white/35 text-xs">{m.fullName}</div>
                  </div>
                  {activeId === m.id && (
                    <div className="ml-auto w-2 h-2 rounded-full" style={{ backgroundColor: `rgb(${m.accentRgb})` }} />
                  )}
                </div>
                <span
                  className={`${m.tagColor} text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mt-2 inline-block`}
                >
                  {m.tag}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: material detail */}
          <div
            key={activeId}
            className="rounded-3xl border overflow-hidden animate-fade-in-scale"
            style={{
              borderColor: `rgba(${activeMaterial.accentRgb},0.25)`,
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          >
            {/* Top line */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, rgb(${activeMaterial.accentRgb}), transparent)` }} />

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{activeMaterial.emoji}</span>
                    <h3 className="font-display text-4xl font-bold text-white uppercase">{activeMaterial.name}</h3>
                  </div>
                  <p className="text-white/40 text-sm max-w-lg">{activeMaterial.description}</p>
                </div>
              </div>

              {/* Props */}
              <div className="flex flex-wrap gap-3 mb-8">
                {activeMaterial.props.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8"
                  >
                    <Icon name={p.icon} fallback="Circle" size={13} style={{ color: `rgb(${activeMaterial.accentRgb})` }} />
                    <span className="text-white/70 text-xs font-medium">{p.label}</span>
                    <span className="text-white/25 text-xs">{p.note}</span>
                  </div>
                ))}
              </div>

              {/* Subtypes tabs */}
              <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-3">Подвиды</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeMaterial.subtypes.map((st, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setActiveSubtype(idx); setHoveredColor(null); }}
                    className="text-left rounded-xl px-4 py-2.5 transition-all border text-sm"
                    style={{
                      backgroundColor: activeSubtype === idx ? `rgba(${activeMaterial.accentRgb},0.18)` : "rgba(255,255,255,0.05)",
                      borderColor: activeSubtype === idx ? `rgba(${activeMaterial.accentRgb},0.6)` : "rgba(255,255,255,0.1)",
                      color: activeSubtype === idx ? `rgb(${activeMaterial.accentRgb})` : "rgba(255,255,255,0.5)",
                      fontWeight: activeSubtype === idx ? 700 : 400,
                    }}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {/* Subtype note */}
              <div
                className="rounded-2xl px-4 py-3 mb-6 text-sm font-medium"
                style={{
                  backgroundColor: `rgba(${activeMaterial.accentRgb},0.08)`,
                  color: `rgb(${activeMaterial.accentRgb})`,
                  border: `1px solid rgba(${activeMaterial.accentRgb},0.2)`,
                }}
              >
                💡 {currentSubtype.note}
              </div>

              {/* Colors */}
              <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-4">Цвета в наличии</p>
              <div className="flex flex-wrap gap-3">
                {currentSubtype.colors.map((c) => (
                  <div
                    key={c.name}
                    className="group flex flex-col items-center gap-1.5 cursor-pointer"
                    onMouseEnter={() => setHoveredColor(c.name)}
                    onMouseLeave={() => setHoveredColor(null)}
                  >
                    <div
                      className="w-10 h-10 rounded-full border-2 transition-all group-hover:scale-125"
                      style={{
                        backgroundColor: c.hex,
                        borderColor: hoveredColor === c.name ? `rgb(${activeMaterial.accentRgb})` : "rgba(255,255,255,0.15)",
                        boxShadow: hoveredColor === c.name ? `0 0 12px rgba(${activeMaterial.accentRgb},0.6)` : "none",
                      }}
                    />
                    <span
                      className="text-xs transition-all text-center leading-tight max-w-[60px]"
                      style={{
                        color: hoveredColor === c.name ? `rgb(${activeMaterial.accentRgb})` : "rgba(255,255,255,0.3)",
                        fontWeight: hoveredColor === c.name ? 600 : 400,
                      }}
                    >
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between">
                <p className="text-white/30 text-sm">
                  Нашёл нужный вариант?
                </p>
                <button
                  className="flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all hover:scale-105 text-sm"
                  style={{
                    backgroundColor: `rgb(${activeMaterial.accentRgb})`,
                    color: activeMaterial.accent === "var(--neon-yellow)" || activeMaterial.accent === "var(--neon-green)" ? "#0a0a0a" : "#ffffff",
                    boxShadow: `0 0 20px rgba(${activeMaterial.accentRgb},0.4)`,
                  }}
                >
                  Заказать печать
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Принимаем форматы STL, OBJ, 3MF. Более 5 материалов, 50+ цветов, доставка по всей России.
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