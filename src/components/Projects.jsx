import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Projects" title="Portfolio highlights" subtitle="This section includes resume projects and two additional fresher-ready projects in data analytics and cyber security." />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-7 shadow-glow transition duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-accent2/30 bg-accent2/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent2">
                {project.type}
              </span>
              <span className="text-sm text-slate-400">{project.period}</span>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-sm font-medium text-accent">{project.stack}</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}