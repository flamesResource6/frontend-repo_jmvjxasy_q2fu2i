import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1b2c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Monidrive. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="text-slate-700 dark:text-slate-200 hover:text-[#007BFF]">Services</a>
          <a href="#fleet" className="text-slate-700 dark:text-slate-200 hover:text-[#007BFF]">Fleet</a>
          <a href="#contact" className="text-slate-700 dark:text-slate-200 hover:text-[#007BFF]">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b1624] dark:text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
