// src/pages/blog/index.jsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'
import BlogNavbar from '../../components/BlogNavbar'

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Usman Ali Khan</title>
      </Head>

      <BlogNavbar />

      <motion.main
        id="blog"
        className="pt-20 px-8 sm:px-16 lg:px-24 pb-12 bg-white dark:bg-slateDark/95 text-slateDark dark:text-slateLight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-4xl text-center mb-8">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-center text-lg">No posts yet. Check back soon!</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                className="p-6 bg-white dark:bg-slateDark rounded-lg shadow hover:shadow-lg transition-shadow"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link href={`/blog/${post.slug}`} className="block space-y-2">
                  <h2 className="font-heading text-2xl hover:text-primary dark:hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                  <p className="font-body text-base text-gray-700 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.main>

    </>
  )
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts')
  const filenames = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : []

  const posts = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const filePath = path.join(postsDir, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug: data.slug || name.replace(/\.md$/, ''),
        title: data.title || 'Untitled',
        date: data.date || '',
        excerpt: data.excerpt || ''
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return { props: { posts } }
}