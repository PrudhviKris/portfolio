import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Experience"
        title="Internship"
        subtitle="A clean split layout showing applied work experience."
      />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-accent2">
          {experience.period}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {experience.title}
        </h3>

        <p className="mt-2 text-slate-300">
          {experience.company} · {experience.mode}
        </p>

        <ul className="mt-6 space-y-4 text-slate-300">
          {experience.points.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  )
}