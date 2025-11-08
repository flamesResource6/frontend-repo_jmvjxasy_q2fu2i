import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0b1624]/70 backdrop-blur border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight" onClick={(e)=>handleNav(e,'#home')}>
            <div className="h-8 w-8 rounded bg-[#001F3F]" />
            <span className="text-[#001F3F] dark:text-white">Monidrive</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNav(e,item.href)}
                className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#007BFF] dark:hover:text-[#66aaff] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 p-2 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-300" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>
            <a
              href="#contact"
              onClick={(e)=>handleNav(e,'#contact')}
              className="rounded-md bg-[#007BFF] px-4 py-2 text-white shadow hover:bg-[#0666d1] transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 p-2">
              {theme === 'dark' ? <Sun className="h-4 w-4 text-yellow-300" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNav(e,item.href)}
                className="rounded-md px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e)=>handleNav(e,'#contact')}
              className="rounded-md bg-[#007BFF] px-3 py-2 text-white text-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
