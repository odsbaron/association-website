export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">关于我们</h1>

      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">协会简介</h2>
          <p className="text-gray-700 leading-7">
            我们是一个由热爱技术、追求创新的同学组成的学生社团。自2020年成立以来，
            协会致力于为成员提供一个开放、包容的学习交流平台，促进技术分享和知识传播。
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">使命与愿景</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">🎯 我们的使命</h3>
              <p className="text-gray-700">
                促进成员之间的技术交流，提升专业技能，培养创新思维，共同成长进步。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🚀 我们的愿景</h3>
              <p className="text-gray-700">
                打造校内一流的技术社团，成为学生技术交流的首选平台，
                为成员的个人发展和职业规划提供有力支持。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">核心价值观</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">💡 创新</h3>
              <p className="text-gray-700">鼓励创新思维，勇于尝试新技术</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="font-semibold mb-2">🤝 协作</h3>
              <p className="text-gray-700">团队协作，共同解决问题</p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-semibold mb-2">📚 分享</h3>
              <p className="text-gray-700">乐于分享知识和经验</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">🎯 卓越</h3>
              <p className="text-gray-700">追求卓越，持续进步</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">组织架构</h2>
          <div className="bg-white border rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-semibold mr-2">会长团：</span>
                <span className="text-gray-700">负责协会整体规划和重大决策</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">技术部：</span>
                <span className="text-gray-700">组织技术分享、项目开发等活动</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">宣传部：</span>
                <span className="text-gray-700">负责协会对外宣传和品牌建设</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">活动部：</span>
                <span className="text-gray-700">策划和组织各类线上线下活动</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              📧 邮箱：info@association.com
            </p>
            <p className="text-gray-700">
              📱 微信公众号：协会官方
            </p>
            <p className="text-gray-700">
              💻 GitHub：github.com/association
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">加入我们</h2>
          <p className="text-gray-700 mb-4">
            我们欢迎所有对技术充满热情的同学加入！无论你是编程新手还是技术大牛，
            只要你愿意学习、乐于分享，这里都将是你的舞台。
          </p>
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">招新信息</h3>
            <p className="mb-4">每学期初进行招新，请关注我们的公众号获取最新消息</p>
            <a
              href="mailto:info@association.com"
              className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              立即咨询
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
