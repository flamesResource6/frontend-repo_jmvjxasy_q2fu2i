import { Truck, Wrench, Route, GasPump } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Vehicle Tracking System',
    description: 'Live GPS tracking, geofencing, and instant alerts for smarter dispatching and security.',
    icon: Truck,
  },
  {
    title: 'Maintenance Scheduling',
    description: 'Automated service reminders and health monitoring to reduce downtime and extend asset life.',
    icon: Wrench,
  },
  {
    title: 'Driver & Route Management',
    description: 'Optimize routes, monitor behavior, and ensure compliance with configurable KPIs.',
    icon: Route,
  },
  {
    title: 'Fuel & Cost Optimization',
    description: 'Track consumption, detect anomalies, and cut costs with actionable analytics.',
    icon: GasPump,
  },
];

function ServiceCard({ title, description, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1b2c] p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-[#F4F4F4] p-3 dark:bg-white/5">
          <Icon className="h-6 w-6 text-[#007BFF]" />
        </div>
        <h3 className="text-lg font-semibold text-[#001F3F] dark:text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-[#F4F4F4] dark:bg-[#0b1624]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#001F3F] dark:text-white">Our Services</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Comprehensive tools to manage vehicles, drivers, and costs—built for modern logistics.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} Icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
