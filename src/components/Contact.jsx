import { motion } from 'framer-motion';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    alert(`Thanks, ${data.name}! We'll get back to you at ${data.email}.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F4F4] dark:bg-[#0b1624]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#001F3F] dark:text-white">Contact Us</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              We’d love to learn about your fleet. Send us a message and our team will respond within one business day.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p><span className="font-semibold text-[#001F3F] dark:text-white">Address:</span> 1200 Mobility Ave, Tech District, NY</p>
              <p><span className="font-semibold text-[#001F3F] dark:text-white">Phone:</span> +1 (212) 555-0147</p>
              <p><span className="font-semibold text-[#001F3F] dark:text-white">Email:</span> hello@monidrive.com</p>
              <div className="mt-4">
                <iframe
                  title="Monidrive HQ"
                  className="w-full h-56 rounded-md border border-black/10 dark:border-white/10"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.973616196433!2d-73.98513052345412!3d40.7680947349491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f662b0d9f9%3A0x8ff2a2d6f21e3b0!2sColumbus%20Circle!5e0!3m2!1sen!2sus!4v1689955555555"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1b2c] p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#001F3F] dark:text-slate-200">Name</label>
                <input name="name" required type="text" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b1624] px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001F3F] dark:text-slate-200">Email</label>
                <input name="email" required type="email" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b1624] px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001F3F] dark:text-slate-200">Message</label>
                <textarea name="message" required rows="5" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b1624] px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder="How can we help?" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-[#007BFF] px-4 py-2 font-medium text-white hover:bg-[#0666d1]">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
