import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        ← 返回博客列表
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
          <span>📅 {post.date}</span>
          <span>✍️ {post.author}</span>
          <span>📂 {post.category}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Cover Image */}
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="w-full rounded-lg shadow-md mb-8"
        />
      )}

      {/* Article Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline"
        >
          ← 返回博客列表
        </Link>
      </footer>
    </article>
  );
}
