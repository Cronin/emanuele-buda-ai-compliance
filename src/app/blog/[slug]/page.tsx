'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

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
            <Link href="/blog" className="font-mono hover:underline">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="section">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm mb-8 hover:underline"
            >
              ← Back to Blog
            </Link>

            {/* Meta */}
            <div className="font-mono text-sm mb-4">
              {post.date} • {post.readTime}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-12 pb-12 border-b-2 border-black">
              {post.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="blog-content">
                {post.content.split('\n').map((paragraph, index) => {
                  // Handle headings
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-4xl font-black mt-12 mb-6">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold mt-10 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold mt-8 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('#### ')) {
                    return (
                      <h4 key={index} className="text-xl font-bold mt-6 mb-2">
                        {paragraph.replace('#### ', '')}
                      </h4>
                    );
                  }

                  // Handle bold text
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-lg my-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }

                  // Handle italic text (quotes)
                  if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                    return (
                      <p key={index} className="italic text-gray-600 my-4">
                        {paragraph.replace(/\*/g, '')}
                      </p>
                    );
                  }

                  // Handle list items
                  if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
                    return (
                      <li key={index} className="ml-6 my-2">
                        {paragraph.replace(/^[-•]\s/, '')}
                      </li>
                    );
                  }

                  // Handle horizontal rules
                  if (paragraph === '---') {
                    return <hr key={index} className="my-12 border-t-2 border-black" />;
                  }

                  // Handle blockquotes
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-black pl-6 italic my-6 text-xl"
                      >
                        {paragraph.replace('> ', '')}
                      </blockquote>
                    );
                  }

                  // Regular paragraphs
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-lg leading-relaxed my-6">
                        {paragraph}
                      </p>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 border-2 border-black p-12 text-center bg-black text-white"
          >
            <h2 className="text-3xl font-black mb-4">
              Ready to Get Compliant?
            </h2>
            <p className="text-lg mb-8">
              Schedule your free AI risk assessment today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#assessment"
                className="bg-white text-black px-8 py-4 font-bold border-2 border-white hover:bg-gray-100 transition-all"
              >
                Get Free Assessment
              </a>
              <a
                href="/#consultation"
                className="bg-black text-white px-8 py-4 font-bold border-2 border-white hover:bg-gray-900 transition-all"
              >
                Book 15-Min Call
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
