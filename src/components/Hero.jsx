import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-[#0b1624]/80 dark:via-[#0b1624]/60 dark:to-[#0b1624] pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#001F3F] dark:text-white"
          >
            Driving Efficiency Through Intelligent Fleet Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-slate-700 dark:text-slate-200 max-w-xl"
          >
            Monidrive delivers real-time tracking, driver management, and fuel optimization solutions that scale with your operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#services" className="inline-flex items-center rounded-md bg-[#007BFF] px-5 py-3 text-white shadow hover:bg-[#0666d1] transition-colors">
              Learn More
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-5 py-3 text-[#001F3F] dark:text-white hover:bg-slate-100 dark:hover:bg-white/5">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
