export const TECHNOLOGIES = [
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

export const MARQUEE_ITEMS = ["FDM", "SLA", "PLA", "ABS", "PETG", "RESIN", "TPU", "ASA", "Castable", "Dental"];
