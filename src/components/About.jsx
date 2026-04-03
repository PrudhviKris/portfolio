import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function About({ data }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="About" title="Career profile" subtitle="A fresher portfolio crafted to present technical depth, project credibility, and readiness for software and AI/ML roles." />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
        >
          <p className="text-lg leading-8 text-slate-300">{data.summary}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
        >
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <div className="mt-4 space-y-2 text-slate-300">
            <p className="font-medium text-white">{data.education.college}</p>
            <p>{data.education.degree}</p>
            <p>{data.education.branch}</p>
            <p>{data.education.duration}</p>
            <p>CGPA: {data.education.cgpa}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}