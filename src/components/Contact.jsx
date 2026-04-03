import { motion } from 'framer-motion'
import { Briefcase, Code2, Mail, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function Contact({ data }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s connect"
        subtitle="Built for fresher applications, internship outreach, GitHub sharing, and direct recruiter communication."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-accent/10 via-white/5 to-accent2/10 p-8 md:grid-cols-2"
      >
        <div>
          <h3 className="text-2xl font-bold text-white">Ready for entry-level opportunities</h3>
          <p className="mt-4 max-w-xl text-slate-300">
            Open to software engineering, AI/ML, and full-stack roles where strong fundamentals, project work, and fast learning matter.
          </p>
        </div>

        <div className="grid gap-4">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200 hover:bg-slate-900"
          >
            <Mail size={18} /> {data.email}
          </a>

          <a
            href={`tel:${data.phone}`}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200 hover:bg-slate-900"
          >
            <Phone size={18} /> {data.phone}
          </a>

          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200 hover:bg-slate-900"
          >
            <Briefcase size={18} /> LinkedIn Profile
          </a>

          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200 hover:bg-slate-900"
          >
            <Code2 size={18} /> GitHub Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  )
}