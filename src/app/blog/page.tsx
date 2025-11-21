'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-black py-6">
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="text-2xl font-black">
            EB
          </Link>
          <nav className="flex gap-6">
            <Link href="/#assessment" className="font-mono hover:underline">
              Assessment
            </Link>
            <Link href="/#pricing" className="font-mono hover:underline">
              Pricing
            </Link>
            <Link href="/blog" className="font-mono font-bold">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Blog Listing */}
      <section className="section">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights on AI Act compliance, regulation, and automation
            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-2 border-black p-8 hover:bg-gray-50 transition-colors"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <div className="font-mono text-sm mb-2">
                        {post.date} • {post.readTime}
                      </div>
                      <h2 className="text-3xl font-bold mb-3 hover:underline">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="font-mono text-sm font-bold">
                    Read Article →
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
