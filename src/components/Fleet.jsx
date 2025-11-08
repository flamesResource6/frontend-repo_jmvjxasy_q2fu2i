import { motion } from 'framer-motion';

const fleetData = [
  { id: 1, name: 'Cargo Truck', model: 'Volvo FH16', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop', desc: 'Heavy-duty long-haul freight transport.' },
  { id: 2, name: 'Delivery Van', model: 'Mercedes Sprinter', img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop', desc: 'Urban delivery and last-mile logistics.' },
  { id: 3, name: 'SUV Patrol', model: 'Toyota Land Cruiser', img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1600&auto=format&fit=crop', desc: 'Field supervision and rapid response.' },
  { id: 4, name: 'Fuel Tanker', model: 'Scania R-Series', img: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe3?q=80&w=1600&auto=format&fit=crop', desc: 'Bulk fuel transport with safety systems.' },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-white dark:bg-[#0f1b2c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#001F3F] dark:text-white">Fleet Gallery</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Explore a snapshot of the vehicle types we support.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b1624]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={`${item.name} ${item.model}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#001F3F] dark:text-white">{item.name}</h3>
                <p className="text-sm text-[#007BFF]">{item.model}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
