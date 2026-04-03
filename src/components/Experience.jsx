import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Experience({ experience, certifications }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Experience" title="Internship and certifications" subtitle="A clean split layout shows applied work experience alongside certifications relevant to AI, cloud, blockchain, and IoT." />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent2">{experience.period}</p>
          <h3 className="mt-3 text-2xl font-bold text-white">{experience.title}</h3>
          <p className="mt-2 text-slate-300">{experience.company} · {experience.mode}</p>
          <ul className="mt-6 space-y-4 text-slate-300">
            {experience.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
        >
          <h3 className="text-2xl font-bold text-white">Certifications</h3>
          <div className="mt-6 space-y-4">
            {certifications.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  )
}