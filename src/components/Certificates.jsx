export default function Certificates({ certifications = [] }) {
  return (
    <section id="certifications" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Selected certificates and achievements with clickable links.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl border p-5 transition hover:-translate-y-1 hover:bg-white/10 ${
                cert.featured
                  ? 'border-emerald-400 bg-emerald-400/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  {cert.featured && (
                    <p className="mt-2 text-sm font-medium text-emerald-300">
                      Featured Certificate
                    </p>
                  )}
                </div>
                <span className="text-sm text-slate-400">Open</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}