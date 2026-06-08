import { useState } from "react";
import Icon from "@/components/ui/icon";
import { TECHNOLOGIES } from "@/data/technologies";

export default function Catalog() {
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
  );
}
