import { getLinkCategories } from "@/lib/links";

export default function LinksPage() {
  const categories = getLinkCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">链接导航</h1>
        <p className="text-gray-600">精选资源与友情链接</p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category.name}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {category.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{link.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {link.description}
                      </p>
                      {link.tags && (
                        <div className="flex flex-wrap gap-1">
                          {link.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 友情提示 */}
      <div className="mt-16 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-semibold mb-2">友情提示</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 点击链接将在新窗口打开</li>
              <li>• 部分资源可能需要特定权限访问</li>
              <li>• 如发现失效链接，请联系我们更新</li>
              <li>• 欢迎推荐优质资源</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
