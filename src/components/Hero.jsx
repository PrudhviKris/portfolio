import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero({ data }) {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(56,189,248,0.16),transparent_24%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Fresher Portfolio
          </span>
          <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
            {data.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-slate-200 md:text-2xl">{data.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{data.summary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-2px] hover:bg-green-400">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={18} /> GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={18} /> LinkedIn</a>
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 hover:text-white"><Download size={18} /> Resume Contact</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 to-accent2/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-card p-8 shadow-glow">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Focus Area</p>
                <p className="mt-2 text-lg font-semibold text-white">AI/ML + Full Stack</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Education</p>
                <p className="mt-2 text-lg font-semibold text-white">B.Tech CSE (AI)</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <p className="text-sm text-slate-400">Highlights</p>
                <ul className="mt-3 space-y-3 text-sm text-slate-300">
                  <li>Built NLP and ML projects using TensorFlow, Keras, and Python.</li>
                  <li>Completed AI Research Internship with measurable model improvements.</li>
                  <li>Expanded portfolio with Data Analytics and Cyber Security projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}