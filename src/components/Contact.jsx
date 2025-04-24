// src/components/Contact.jsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="
        px-8 sm:px-16 py-20 flex flex-col items-center space-y-4
        bg-slateLight text-slateDark
        dark:bg-slateDark dark:text-slateLight
      "
    >
      <h2 className="font-heading text-4xl dark:text-slateLight">Let’s Connect</h2>
      <p className="font-body text-lg max-w-lg text-center dark:text-slateLight">
        Got a project idea or just want to chat about Linux? Shoot me an email and let’s make something awesome.
      </p>
      <a
        href="mailto:usman@outlook.in"
        className="
          mt-4 px-6 py-3 rounded-2xl shadow-lg-soft
          bg-primary text-white hover:shadow-lg transition hover:scale-105
          dark:bg-white dark:text-primary
        "
      >
        Email Me
      </a>
    </section>
  )
}
