import Icon from "@/components/ui/icon";

export default function Navbar() {
  return (
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
  );
}
