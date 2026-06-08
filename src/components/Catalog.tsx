import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { USE_CASES } from "@/data/technologies";

export default function Catalog() {
  const [activeUseCase, setActiveUseCase] = useState<string>("tech");
  const [activeMaterial, setActiveMaterial] = useState<number>(0);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  // Отслеживаем предыдущую технологию, чтобы понять что анимировать
  const prevTechRef = useRef<string>(USE_CASES[0].materials[0].tech);
  // Ключи для принудительного перезапуска анимации
  const [matAnimKey, setMatAnimKey] = useState(0);
  const [techAnimKey, setTechAnimKey] = useState(0);

  const useCase = USE_CASES.find((u) => u.id === activeUseCase)!;
  const material = useCase.materials[activeMaterial] ?? useCase.materials[0];

  const handleUseCaseChange = (id: string) => {
    const newUseCase = USE_CASES.find((u) => u.id === id)!;
    const newMaterial = newUseCase.materials[0];
    const techChanged = newMaterial.tech !== prevTechRef.current;

    setActiveUseCase(id);
    setActiveMaterial(0);
    setHoveredColor(null);

    setMatAnimKey((k) => k + 1);
    if (techChanged) setTechAnimKey((k) => k + 1);
    prevTechRef.current = newMaterial.tech;
  };

  const handleMaterialChange = (idx: number) => {
    const newMaterial = useCase.materials[idx];
    const techChanged = newMaterial.tech !== prevTechRef.current;

    setActiveMaterial(idx);
    setHoveredColor(null);

    // Всегда анимируем блок материала
    setMatAnimKey((k) => k + 1);
    // Блок технологии — только если tech сменилась
    if (techChanged) setTechAnimKey((k) => k + 1);
    prevTechRef.current = newMaterial.tech;
  };

  const accentRgb = useCase.accentRgb;
  const matAccentRgb = material.techAccentRgb;

  return (
    <section id="catalog" className="py-20 px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-10">
        <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">Материалы в наличии</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight">
          Что нужно<br />
          <span style={{ color: `rgb(${accentRgb})`, transition: "color 0.3s" }}>напечатать?</span>
        </h2>
      </div>

      {/* ── STEP 1: задача ── */}
      <div className="mb-8">
        <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-4">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white mr-2 text-xs font-bold">1</span>
          Выбери категорию
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {USE_CASES.map((uc) => (
            <button
              key={uc.id}
              onClick={() => handleUseCaseChange(uc.id)}
              className="flex flex-col items-start gap-2 p-4 rounded-2xl border transition-all text-left"
              style={{
                backgroundColor: activeUseCase === uc.id ? `rgba(${uc.accentRgb},0.12)` : "rgba(255,255,255,0.03)",
                borderColor: activeUseCase === uc.id ? `rgba(${uc.accentRgb},0.55)` : "rgba(255,255,255,0.08)",
                boxShadow: activeUseCase === uc.id ? `0 0 24px rgba(${uc.accentRgb},0.15)` : "none",
              }}
            >
              <span className="text-2xl">{uc.emoji}</span>
              <span
                className="font-semibold text-sm leading-tight"
                style={{ color: activeUseCase === uc.id ? `rgb(${uc.accentRgb})` : "rgba(255,255,255,0.65)" }}
              >
                {uc.label}
              </span>
              <span className="text-white/25 text-xs leading-snug">{uc.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── STEP 2: материал + справка ── */}
      <div
        className="rounded-3xl border overflow-hidden"
        style={{
          borderColor: `rgba(${accentRgb},0.2)`,
          backgroundColor: "rgba(255,255,255,0.025)",
          transition: "border-color 0.3s",
        }}
      >
        <div
          className="h-0.5 w-full"
          style={{
            background: `linear-gradient(90deg, rgb(${accentRgb}), transparent)`,
            transition: "background 0.3s",
          }}
        />

        <div className="p-6 md:p-8">
          <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white mr-2 text-xs font-bold">2</span>
            Подходящие материалы
          </p>

          {/* material tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {useCase.materials.map((m, idx) => (
              <button
                key={idx}
                onClick={() => handleMaterialChange(idx)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all"
                style={{
                  backgroundColor: activeMaterial === idx ? `rgba(${m.techAccentRgb},0.18)` : "rgba(255,255,255,0.05)",
                  borderColor: activeMaterial === idx ? `rgba(${m.techAccentRgb},0.6)` : "rgba(255,255,255,0.1)",
                  color: activeMaterial === idx ? `rgb(${m.techAccentRgb})` : "rgba(255,255,255,0.45)",
                  fontWeight: activeMaterial === idx ? 700 : 400,
                }}
              >
                {m.name}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-md font-bold"
                  style={{
                    backgroundColor: `rgba(${m.techAccentRgb},0.15)`,
                    color: `rgb(${m.techAccentRgb})`,
                  }}
                >
                  {m.tech}
                </span>
              </button>
            ))}
          </div>

          {/* справка: материал + технология */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* блок материала — анимируется всегда при смене */}
            <div
              key={`mat-${matAnimKey}`}
              className="rounded-2xl p-4 animate-fade-in-scale"
              style={{
                animationFillMode: "forwards",
                backgroundColor: `rgba(${accentRgb},0.07)`,
                border: `1px solid rgba(${accentRgb},0.2)`,
              }}
            >
              <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-2">О материале</p>
              <p className="font-display text-lg font-bold text-white mb-1">{material.name}</p>
              <p className="text-white/60 text-sm leading-relaxed">💡 {material.note}</p>
            </div>

            {/* блок технологии — анимируется только при смене tech */}
            <div
              key={`tech-${techAnimKey}`}
              className="rounded-2xl p-4 animate-fade-in-scale"
              style={{
                animationFillMode: "forwards",
                backgroundColor: `rgba(${matAccentRgb},0.07)`,
                border: `1px solid rgba(${matAccentRgb},0.2)`,
              }}
            >
              <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-2">Технология печати</p>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="font-display text-lg font-bold"
                  style={{ color: `rgb(${matAccentRgb})` }}
                >
                  {material.tech}
                </span>
                <Icon
                  name={material.tech === "FDM" ? "Layers" : "Gem"}
                  size={14}
                  style={{ color: `rgb(${matAccentRgb})` }}
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{material.techNote}</p>
            </div>
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
                    borderColor: hoveredColor === c.name ? `rgb(${matAccentRgb})` : "rgba(255,255,255,0.12)",
                    transform: hoveredColor === c.name ? "scale(1.3)" : "scale(1)",
                    boxShadow: hoveredColor === c.name ? `0 0 14px rgba(${matAccentRgb},0.7)` : "none",
                  }}
                />
                <span
                  className="text-xs text-center leading-tight max-w-[56px] transition-all duration-200"
                  style={{
                    color: hoveredColor === c.name ? `rgb(${matAccentRgb})` : "rgba(255,255,255,0.28)",
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
                {useCase.label} · {material.name} · {material.tech}
              </p>
            </div>
            <button
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all hover:scale-105 text-sm flex-shrink-0"
              style={{
                backgroundColor: `rgb(${matAccentRgb})`,
                color: material.tech === "FDM" ? "#000000" : "#ffffff",
                boxShadow: `0 0 22px rgba(${matAccentRgb},0.4)`,
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
