import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">高效学术</h3>
              <p className="text-gray-600">
                深耕金融科技前沿领域，促进学术交流与知识共享
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">开源宣传</h3>
              <p className="text-gray-600">
                传播开源精神，推动技术创新与行业发展
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">动态联合</h3>
              <p className="text-gray-600">
                连接学界与业界，构建多元化协作生态
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">最新文章</h2>
            <Link href="/blog" className="text-primary hover:underline">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-gray-500">
                暂无文章，敬请期待...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">快速导航</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              href="/timeline"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-semibold">发展历程</h3>
            </Link>
            <Link
              href="/archives"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold">资料库</h3>
            </Link>
            <Link
              href="/members"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold">成员介绍</h3>
            </Link>
            <Link
              href="/links"
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="font-semibold">相关链接</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-400">协会成员</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-gray-400">学术活动</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-gray-400">企业合作</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5年+</div>
              <div className="text-gray-400">砥砺前行</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
