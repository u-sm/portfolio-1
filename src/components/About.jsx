// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="
        px-8 sm:px-16 py-20
        bg-white text-slateDark
        dark:bg-slateDark dark:text-slateLight
        space-y-6
      "
    >
      <h2 className="font-heading text-4xl dark:text-slateLight">About Me</h2>
      <p className="font-body text-lg max-w-2xl leading-relaxed dark:text-slateLight">
        I’m a backend engineer who loves crafting reliable, efficient systems. When I’m not writing
        C# or tuning SQL queries, you’ll find me exploring Linux shells, optimizing workflows, and
        occasionally breaking things just to fix them better.
      </p>
    </section>
  )
}
