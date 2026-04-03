import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Skills({ skills }) {
  const groups = [
    ['Programming', skills.programming],
    ['Databases', skills.databases],
    ['Web Development', skills.web],
    ['Developer Tools', skills.tools],
    ['AI / ML', skills.ai],
  ]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Skills" title="Technical Toolkit" subtitle="Grouped skill cards make the portfolio easy to scan for recruiters, interviewers, and hiring managers." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map(([title, items], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}