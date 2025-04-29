// src/pages/blog/[slug].jsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'
import BlogNavbar from '../../components/BlogNavbar'

export default function PostPage({ title, date, contentHtml }) {
    return (
        <>
            <Head>
                <title>{`${title} | Usman Ali Khan`}</title>
            </Head>

            <BlogNavbar />

            <motion.main
                className="pt-20 px-8 sm:px-16 lg:px-24 pb-12 bg-white dark:bg-slateDark text-slateDark dark:text-slateLight min-h-screen"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/blog" className="text-primary dark:text-accent hover:underline">
                    Back to Blog
                </Link>
                <article className="max-w-3xl mx-auto mt-6 space-y-8">
                    <motion.h1
                        className="font-heading text-3xl"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {title}
                    </motion.h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                    <motion.div
                        className="prose dark:prose-invert max-w-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </article>
            </motion.main>

        </>
    )
}

export async function getStaticPaths() {
    const postsDir = path.join(process.cwd(), 'posts')
    const filenames = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : []
    const paths = filenames
        .filter((name) => name.endsWith('.md'))
        .map((name) => ({ params: { slug: name.replace(/\.md$/, '') } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const processed = await remark().use(html).process(content)
    return {
        props: {
            title: data.title || 'Untitled',
            date: data.date || '',
            contentHtml: processed.toString()
        }
    }
}
