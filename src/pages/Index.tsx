import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TECHNOLOGIES = [
  {
    id: "fdm",
    name: "FDM",
    fullName: "Послойная печать",
    tagline: "Нить расплавляется и укладывается слоями",
    accentRgb: "0,245,255",
    accent: "#00f5ff",
    icon: "Layers",
    pros: ["Большой объём", "Широкий выбор материалов", "Доступная цена"],
    cons: ["Видны слои", "Менее точная"],
    useCases: [
      {
        id: "deco",
        label: "Декор & хобби",
        emoji: "🎨",
        desc: "Статуэтки, вазы, украшения, косплей",
        materials: [
          {
            name: "PLA Silk",
            note: "Блестит как металл, идеален для декора",
            colors: [
              { hex: "#c0a060", name: "Золото" },
              { hex: "#c0c0c0", name: "Серебро" },
              { hex: "#b87333", name: "Медь" },
              { hex: "#ff2d9b", name: "Розовое золото" },
              { hex: "#4a90d9", name: "Синее золото" },
            ],
          },
          {
            name: "PLA Matte",
            note: "Матовый — нежный вид без бликов",
            colors: [
              { hex: "#f5f0eb", name: "Молочный" },
              { hex: "#2a2a2a", name: "Антрацит" },
              { hex: "#5c8a5c", name: "Хаки" },
              { hex: "#8a6a5c", name: "Терракота" },
              { hex: "#4a6a8a", name: "Синий туман" },
              { hex: "#9a6aaa", name: "Лаванда" },
            ],
          },
          {
            name: "PLA Стандарт",
            note: "Просто PLA — куча цветов, быстро и дёшево",
            colors: [
              { hex: "#ff2d9b", name: "Розовый" },
              { hex: "#00f5ff", name: "Голубой" },
              { hex: "#ffe600", name: "Жёлтый" },
              { hex: "#39ff14", name: "Зелёный" },
              { hex: "#ff6a00", name: "Оранжевый" },
              { hex: "#7c3aed", name: "Фиолетовый" },
              { hex: "#ffffff", name: "Белый" },
              { hex: "#0a0a0a", name: "Чёрный" },
            ],
          },
        ],
      },
      {
        id: "tech",
        label: "Техническая деталь",
        emoji: "🔩",
        desc: "Корпуса, кронштейны, запчасти, инженерные изделия",
        materials: [
          {
            name: "ABS",
            note: "Ударопрочный, жаростойкий — для нагруженных деталей",
            colors: [
              { hex: "#ffffff", name: "Белый" },
              { hex: "#0a0a0a", name: "Чёрный" },
              { hex: "#888888", name: "Серый" },
              { hex: "#ff6a00", name: "Оранжевый" },
              { hex: "#1a3a6a", name: "Синий" },
            ],
          },
          {
            name: "ASA",
            note: "ABS + устойчивость к УФ — для улицы и авто",
            colors: [
              { hex: "#ffffff", name: "Белый" },
              { hex: "#0a0a0a", name: "Чёрный" },
              { hex: "#888888", name: "Серый" },
              { hex: "#c8a060", name: "Бежевый" },
            ],
          },
          {
            name: "PETG",
            note: "Универсал: прочнее PLA, легче ABS, влагостоек",
            colors: [
              { hex: "#ffffff", name: "Белый" },
              { hex: "#0a0a0a", name: "Чёрный" },
              { hex: "#ffe600", name: "Жёлтый" },
              { hex: "#ff6a00", name: "Оранжевый" },
              { hex: "#888888", name: "Серый" },
            ],
          },
        ],
      },
      {
        id: "flex",
        label: "Гибкое & резиновое",
        emoji: "🫳",
        desc: "Чехлы, уплотнители, прокладки, ручки",
        materials: [
          {
            name: "TPU Мягкий (85A)",
            note: "Тянется как резина — 300% эластичность",
            colors: [
              { hex: "#0a0a0a", name: "Чёрный" },
              { hex: "#ffffff", name: "Белый" },
              { hex: "#ff2d9b", name: "Розовый" },
              { hex: "#ff6a00", name: "Оранжевый" },
            ],
          },
          {
            name: "TPU Жёсткий (95A)",
            note: "Упругий — держит форму, но не ломается",
            colors: [
              { hex: "#0a0a0a", name: "Чёрный" },
              { hex: "#888888", name: "Серый" },
              { hex: "#00f5ff", name: "Голубой" },
            ],
          },
        ],
      },
      {
        id: "food",
        label: "Контакт с едой & водой",
        emoji: "🍽️",
        desc: "Посуда, формы, мыльницы, стаканы",
        materials: [
          {
            name: "PETG Прозрачный",
            note: "Пищевой класс, влагостоек, почти как стекло",
            colors: [
              { hex: "rgba(255,255,255,0.12)", name: "Прозрачный" },
              { hex: "rgba(0,245,255,0.25)", name: "Голубой" },
              { hex: "rgba(255,230,0,0.25)", name: "Жёлтый" },
            ],
          },
          {
            name: "PETG Стандарт",
            note: "Влагостойкий, моется в посудомойке",
            colors: [
              { hex: "#ffffff", name: "Белый" },
              { hex: "#39ff14", name: "Зелёный" },
              { hex: "#00f5ff", name: "Голубой" },
              { hex: "#ff6a00", name: "Оранжевый" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sla",
    name: "SLA / MSLA",
    fullName: "Фотополимерная печать",
    tagline: "Смола затвердевает под ультрафиолетом",
    accentRgb: "255,45,155",
    accent: "#ff2d9b",
    icon: "Gem",
    pros: ["Точность 0.05мм", "Гладкая поверхность", "Сложные формы"],
    cons: ["Меньше объём", "Хрупче FDM"],
    useCases: [
      {
        id: "miniature",
        label: "Фигурки & миниатюры",
        emoji: "🗿",
        desc: "Настольные игры, аниме, портреты, скульптуры",
        materials: [
          {
            name: "Стандартный Resin",
            note: "Гладкая поверхность, отличная детализация",
            colors: [
              { hex: "#f5f0e8", name: "Телесный" },
              { hex: "#ffffff", name: "Белый" },
              { hex: "#0a0a0a", name: "Чёрный" },
              { hex: "#888888", name: "Серый" },
            ],
          },
          {
            name: "Цветной Resin",
            note: "Уже окрашен — не нужно красить вручную",
            colors: [
              { hex: "#ff2d9b", name: "Розовый" },
              { hex: "#00f5ff", name: "Голубой" },
              { hex: "#ffe600", name: "Жёлтый" },
              { hex: "#39ff14", name: "Зелёный" },
              { hex: "#ff6a00", name: "Оранжевый" },
            ],
          },
        ],
      },
      {
        id: "jewelry",
        label: "Ювелирка & мастер-модели",
        emoji: "💍",
        desc: "Кольца, подвески, мастер-модели для литья",
        materials: [
          {
            name: "Castable Resin",
            note: "Выжигаемый — прямо для литья металла",
            colors: [
              { hex: "#7c3aed", name: "Фиолетовый" },
              { hex: "#c0a060", name: "Жёлтый воск" },
            ],
          },
          {
            name: "ABS-like Resin",
            note: "Прочнее стандартного — меньше хрупкости",
            colors: [
              { hex: "#ffffff", name: "Белый" },
              { hex: "#c8c8c8", name: "Светло-серый" },
              { hex: "#0a0a0a", name: "Чёрный" },
            ],
          },
        ],
      },
      {
        id: "transparent",
        label: "Прозрачные изделия",
        emoji: "🔍",
        desc: "Линзы, колбы, окошки, оптические детали",
        materials: [
          {
            name: "Прозрачный Resin",
            note: "После полировки — почти стекло",
            colors: [
              { hex: "rgba(255,255,255,0.10)", name: "Прозрачный" },
              { hex: "rgba(0,245,255,0.3)", name: "Голубой" },
              { hex: "rgba(255,45,155,0.3)", name: "Розовый" },
              { hex: "rgba(255,230,0,0.3)", name: "Янтарный" },
            ],
          },
        ],
      },
      {
        id: "dental",
        label: "Медицина & стоматология",
        emoji: "🦷",
        desc: "Модели зубов, элайнеры, хирургические шаблоны",
        materials: [
          {
            name: "Dental Resin",
            note: "Биосовместимый — сертифицирован для медицины",
            colors: [
              { hex: "#f5f0e8", name: "Телесный" },
              { hex: "#ffffff", name: "Белый" },
              { hex: "rgba(255,255,255,0.1)", name: "Прозрачный" },
            ],
          },
        ],
      },
    ],
  },
];

const MARQUEE_ITEMS = ["FDM", "SLA", "PLA", "ABS", "PETG", "RESIN", "TPU", "ASA", "Castable", "Dental"];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Index() {
  const [activeTech, setActiveTech] = useState<"fdm" | "sla">("fdm");
  const [activeUseCase, setActiveUseCase] = useState<string>("deco");
  const [activeMaterial, setActiveMaterial] = useState<number>(0);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const tech = TECHNOLOGIES.find((t) => t.id === activeTech)!;
  const useCase = tech.useCases.find((u) => u.id === activeUseCase) ?? tech.useCases[0];
  const material = useCase.materials[activeMaterial] ?? useCase.materials[0];

  const handleTechChange = (id: "fdm" | "sla") => {
    setActiveTech(id);
    setActiveUseCase(TECHNOLOGIES.find((t) => t.id === id)!.useCases[0].id);
    setActiveMaterial(0);
    setHoveredColor(null);
  };

  const handleUseCaseChange = (id: string) => {
    setActiveUseCase(id);
    setActiveMaterial(0);
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

      {/* ── CATALOG ─────────────────────────────────────────────────────── */}
      <section id="catalog" className="py-20 px-6 max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">Материалы в наличии</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight">
            Выбери технологию —<br />
            <span style={{ color: `rgb(${tech.accentRgb})` }}>подберём материал</span>
          </h2>
        </div>

        {/* ── STEP 1: технология ── */}
        <div className="mb-8">
          <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white mr-2 text-xs font-bold">1</span>
            Технология печати
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECHNOLOGIES.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTechChange(t.id as "fdm" | "sla")}
                className="text-left rounded-2xl p-5 border transition-all"
                style={{
                  backgroundColor: activeTech === t.id ? `rgba(${t.accentRgb},0.1)` : "rgba(255,255,255,0.03)",
                  borderColor: activeTech === t.id ? `rgba(${t.accentRgb},0.55)` : "rgba(255,255,255,0.08)",
                  boxShadow: activeTech === t.id ? `0 0 30px rgba(${t.accentRgb},0.15)` : "none",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `rgba(${t.accentRgb},0.15)` }}
                    >
                      <Icon name={t.icon} size={18} style={{ color: `rgb(${t.accentRgb})` }} />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-white tracking-wider">{t.name}</div>
                      <div className="text-white/35 text-xs">{t.fullName}</div>
                    </div>
                  </div>
                  {activeTech === t.id && (
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: `rgb(${t.accentRgb})` }}>
                      <Icon name="Check" size={11} className="text-black" />
                    </div>
                  )}
                </div>
                <p className="text-white/40 text-xs mb-3">{t.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {t.pros.map((p) => (
                    <span key={p} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/8">
                      ✓ {p}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── STEP 2: задача ── */}
        <div
          key={activeTech + "-uc"}
          className="mb-8 animate-fade-in-scale"
          style={{ animationFillMode: "forwards" }}
        >
          <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white mr-2 text-xs font-bold">2</span>
            Что нужно напечатать?
          </p>
          <div className="flex flex-wrap gap-3">
            {tech.useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => handleUseCaseChange(uc.id)}
                className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border transition-all text-sm"
                style={{
                  backgroundColor: activeUseCase === uc.id ? `rgba(${tech.accentRgb},0.15)` : "rgba(255,255,255,0.04)",
                  borderColor: activeUseCase === uc.id ? `rgba(${tech.accentRgb},0.55)` : "rgba(255,255,255,0.09)",
                  color: activeUseCase === uc.id ? `rgb(${tech.accentRgb})` : "rgba(255,255,255,0.45)",
                  fontWeight: activeUseCase === uc.id ? 700 : 400,
                }}
              >
                <span className="text-lg leading-none">{uc.emoji}</span>
                <span>{uc.label}</span>
              </button>
            ))}
          </div>
          {useCase && (
            <p className="text-white/25 text-xs mt-3 ml-1">
              {useCase.desc}
            </p>
          )}
        </div>

        {/* ── STEP 3: материал + цвета ── */}
        <div
          key={activeTech + activeUseCase}
          className="rounded-3xl border overflow-hidden animate-fade-in-scale"
          style={{
            animationFillMode: "forwards",
            borderColor: `rgba(${tech.accentRgb},0.2)`,
            backgroundColor: "rgba(255,255,255,0.025)",
          }}
        >
          <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, rgb(${tech.accentRgb}), transparent)` }} />

          <div className="p-6 md:p-8">
            <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white mr-2 text-xs font-bold">3</span>
              Подходящие материалы
            </p>

            {/* material tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {useCase.materials.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveMaterial(idx); setHoveredColor(null); }}
                  className="px-4 py-2.5 rounded-xl border text-sm transition-all"
                  style={{
                    backgroundColor: activeMaterial === idx ? `rgba(${tech.accentRgb},0.18)` : "rgba(255,255,255,0.05)",
                    borderColor: activeMaterial === idx ? `rgba(${tech.accentRgb},0.6)` : "rgba(255,255,255,0.1)",
                    color: activeMaterial === idx ? `rgb(${tech.accentRgb})` : "rgba(255,255,255,0.45)",
                    fontWeight: activeMaterial === idx ? 700 : 400,
                  }}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {/* material note */}
            <div
              className="rounded-2xl px-4 py-3 mb-8 text-sm font-medium"
              style={{
                backgroundColor: `rgba(${tech.accentRgb},0.07)`,
                color: `rgb(${tech.accentRgb})`,
                border: `1px solid rgba(${tech.accentRgb},0.2)`,
              }}
            >
              💡 {material.note}
            </div>

            {/* colors */}
            <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-5">Цвета в наличии</p>
            <div className="flex flex-wrap gap-4">
              {material.colors.map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col items-center gap-1.5 cursor-pointer"
                  onMouseEnter={() => setHoveredColor(c.name)}
                  onMouseLeave={() => setHoveredColor(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full border-2 transition-all duration-200"
                    style={{
                      backgroundColor: c.hex,
                      borderColor: hoveredColor === c.name ? `rgb(${tech.accentRgb})` : "rgba(255,255,255,0.12)",
                      transform: hoveredColor === c.name ? "scale(1.3)" : "scale(1)",
                      boxShadow: hoveredColor === c.name ? `0 0 14px rgba(${tech.accentRgb},0.7)` : "none",
                    }}
                  />
                  <span
                    className="text-xs text-center leading-tight max-w-[56px] transition-all duration-200"
                    style={{
                      color: hoveredColor === c.name ? `rgb(${tech.accentRgb})` : "rgba(255,255,255,0.28)",
                      fontWeight: hoveredColor === c.name ? 600 : 400,
                    }}
                  >
                    {c.name}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-white/60 text-sm font-medium">Нашёл нужный вариант?</p>
                <p className="text-white/25 text-xs mt-0.5">
                  {tech.name} · {useCase.label} · {material.name}
                </p>
              </div>
              <button
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all hover:scale-105 text-sm flex-shrink-0"
                style={{
                  backgroundColor: `rgb(${tech.accentRgb})`,
                  color: tech.id === "fdm" ? "#000000" : "#ffffff",
                  boxShadow: `0 0 22px rgba(${tech.accentRgb},0.4)`,
                }}
              >
                Заказать печать
                <Icon name="ArrowRight" size={14} />
              </button>
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
    </div>
  );
}
