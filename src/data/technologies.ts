export type Color = { hex: string; name: string };

export type Material = {
  name: string;
  tech: "FDM" | "SLA";
  techAccentRgb: string;
  techNote: string;
  note: string;
  colors: Color[];
};

export type UseCase = {
  id: string;
  label: string;
  emoji: string;
  desc: string;
  accentRgb: string;
  materials: Material[];
};

export const USE_CASES: UseCase[] = [
  {
    id: "tech",
    label: "Техническая деталь",
    emoji: "🔩",
    desc: "Корпуса, кронштейны, запчасти, крепёж, инженерные изделия",
    accentRgb: "0,245,255",
    materials: [
      {
        name: "ABS",
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Крупные детали, доступная цена.",
        note: "Ударопрочный и жаростойкий. Не деформируется до 100°C — идеален для деталей под нагрузкой.",
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
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Крупные детали, доступная цена.",
        note: "Как ABS, но ещё выдерживает улицу и солнце — УФ-стойкий. Для авто, уличных кронштейнов.",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#888888", name: "Серый" },
          { hex: "#c8a060", name: "Бежевый" },
        ],
      },
      {
        name: "PETG",
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Крупные детали, доступная цена.",
        note: "Универсал: прочнее PLA, легче ABS в работе. Влагостоек, немного гибкий — не ломается резко.",
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
    id: "deco",
    label: "Декор & хобби",
    emoji: "🎨",
    desc: "Статуэтки, вазы, украшения, косплей, подарки",
    accentRgb: "255,45,155",
    materials: [
      {
        name: "PLA Silk",
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Широкий выбор цветов и фактур.",
        note: "Блестит как металл. Золото, серебро, медь — без покраски. Для декора и подарков.",
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
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Широкий выбор цветов и фактур.",
        note: "Матовый — нежный вид без бликов. Отлично смотрится в интерьере, не «пластмассовый» вид.",
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
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Широкий выбор цветов и фактур.",
        note: "Просто PLA — самый доступный, куча ярких цветов. Для прототипов, косплея и всего остального.",
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
    id: "flex",
    label: "Гибкое изделие",
    emoji: "🫳",
    desc: "Чехлы, уплотнители, прокладки, ручки, амортизаторы",
    accentRgb: "57,255,20",
    materials: [
      {
        name: "TPU Мягкий (85A)",
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Гибкие нити укладываются слоями.",
        note: "Тянется как резина — 300% эластичность. Чехлы на телефон, мягкие ручки, уплотнения.",
        colors: [
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#ffffff", name: "Белый" },
          { hex: "#ff2d9b", name: "Розовый" },
          { hex: "#ff6a00", name: "Оранжевый" },
        ],
      },
      {
        name: "TPU Жёсткий (95A)",
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать нитью. Гибкие нити укладываются слоями.",
        note: "Упругий — держит форму, но не ломается. Подошвы, прокладки, технические буферы.",
        colors: [
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#888888", name: "Серый" },
          { hex: "#00f5ff", name: "Голубой" },
        ],
      },
    ],
  },
  {
    id: "miniature",
    label: "Фигурки & миниатюры",
    emoji: "🗿",
    desc: "Настольные игры, аниме, портреты, скульптуры",
    accentRgb: "255,45,155",
    materials: [
      {
        name: "Стандартный Resin",
        tech: "SLA",
        techAccentRgb: "255,45,155",
        techNote: "SLA — фотополимер, затвердевает под УФ. Точность 0.05мм, гладкая поверхность.",
        note: "Гладкая поверхность, отличная детализация мелких элементов. Идеал для фигурок и миниатюр.",
        colors: [
          { hex: "#f5f0e8", name: "Телесный" },
          { hex: "#ffffff", name: "Белый" },
          { hex: "#0a0a0a", name: "Чёрный" },
          { hex: "#888888", name: "Серый" },
        ],
      },
      {
        name: "Цветной Resin",
        tech: "SLA",
        techAccentRgb: "255,45,155",
        techNote: "SLA — фотополимер, затвердевает под УФ. Точность 0.05мм, гладкая поверхность.",
        note: "Уже окрашен в массе — не нужно красить вручную. Для ярких фигурок и игровых миниатюр.",
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
    id: "transparent",
    label: "Прозрачные изделия",
    emoji: "🔍",
    desc: "Линзы, колбы, окошки, оптические детали, светильники",
    accentRgb: "180,220,255",
    materials: [
      {
        name: "Прозрачный Resin",
        tech: "SLA",
        techAccentRgb: "255,45,155",
        techNote: "SLA — фотополимер. После полировки даёт оптическую прозрачность.",
        note: "После шлифовки и полировки — почти стекло. Для линз, колб, декоративных окошек.",
        colors: [
          { hex: "rgba(255,255,255,0.10)", name: "Прозрачный" },
          { hex: "rgba(0,245,255,0.30)", name: "Голубой" },
          { hex: "rgba(255,45,155,0.30)", name: "Розовый" },
          { hex: "rgba(255,230,0,0.30)", name: "Янтарный" },
        ],
      },
      {
        name: "PETG Прозрачный",
        tech: "FDM",
        techAccentRgb: "0,245,255",
        techNote: "FDM — послойная печать. Прозрачный PETG даёт полупрозрачный эффект.",
        note: "Пищевой класс, влагостоек. Полупрозрачный — для колб, светильников, крышек.",
        colors: [
          { hex: "rgba(255,255,255,0.12)", name: "Прозрачный" },
          { hex: "rgba(0,245,255,0.25)", name: "Голубой" },
          { hex: "rgba(255,230,0,0.25)", name: "Жёлтый" },
        ],
      },
    ],
  },
  {
    id: "jewelry",
    label: "Ювелирка & мастер-модели",
    emoji: "💍",
    desc: "Кольца, подвески, мастер-модели для литья в металл",
    accentRgb: "192,160,96",
    materials: [
      {
        name: "Castable Resin",
        tech: "SLA",
        techAccentRgb: "255,45,155",
        techNote: "SLA — фотополимер. Точность 0.05мм — воспроизводит мельчайшие детали украшений.",
        note: "Выжигаемый воск — прямо для литья в золото и серебро. Стандарт ювелирного производства.",
        colors: [
          { hex: "#7c3aed", name: "Фиолетовый" },
          { hex: "#c0a060", name: "Жёлтый воск" },
        ],
      },
      {
        name: "ABS-like Resin",
        tech: "SLA",
        techAccentRgb: "255,45,155",
        techNote: "SLA — фотополимер. Точность 0.05мм — воспроизводит мельчайшие детали украшений.",
        note: "Прочнее стандартного Resin — меньше хрупкости. Для мастер-моделей, которые нужно обрабатывать руками.",
        colors: [
          { hex: "#ffffff", name: "Белый" },
          { hex: "#c8c8c8", name: "Светло-серый" },
          { hex: "#0a0a0a", name: "Чёрный" },
        ],
      },
    ],
  },
];

export const MARQUEE_ITEMS = ["FDM", "SLA", "PLA", "ABS", "PETG", "RESIN", "TPU", "ASA", "Castable", "Dental"];
