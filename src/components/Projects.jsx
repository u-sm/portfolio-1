// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    { title: 'Microsite Game SPA', tech: '.NET C#', desc: 'Interactive one-page game prototype.' },
    { title: 'Placeholder Project 2', tech: 'Coming soon', desc: 'Stay tuned!' },
  ]

  return (
    <section
      id="projects"
      className="
        px-8 sm:px-16 py-20
        bg-white text-slateDark
        dark:bg-slateDark dark:text-slateLight
        space-y-8
      "
    >
      <h2 className="font-heading text-4xl dark:text-slateLight">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="
              p-6 bg-slateLight rounded-2xl shadow-lg-soft hover:shadow-lg transition hover:scale-[1.02]
              dark:bg-slateDark
            "
          >
            <h3 className="font-heading text-2xl mb-2 dark:text-slateLight">{p.title}</h3>
            <p className="font-body text-sm italic mb-4 text-primary dark:text-accent">{p.tech}</p>
            <p className="font-body text-base dark:text-slateLight">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
