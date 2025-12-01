import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <p className="text-sm text-gray-400">
              致力于打造一个开放、创新、共享的学习交流平台，促进成员共同成长。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  博客文章
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-white transition-colors">
                  发展历程
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-white transition-colors">
                  成员介绍
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-white transition-colors">
                  相关链接
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">资源</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/archives" className="hover:text-white transition-colors">
                  资料库
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  活动记录
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  文档下载
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@association.com" className="hover:text-white transition-colors">
                  📧 info@association.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  📱 微信公众号
                </a>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-white transition-colors">
                  💻 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>© {currentYear} 协会官方网站. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
