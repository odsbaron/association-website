import { getMembers } from "@/lib/members";
import Image from "next/image";

export default function MembersPage() {
  const members = getMembers();

  // 判断是否为图片URL
  const isImageUrl = (avatar: string) => {
    return avatar.startsWith('http') || avatar.startsWith('/') || avatar.endsWith('.png') || avatar.endsWith('.jpg') || avatar.endsWith('.jpeg') || avatar.endsWith('.gif');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">成员介绍</h1>
        <p className="text-gray-600">认识我们优秀的团队成员</p>
      </div>

      {/* 会长团 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">👑</span>
          会长团
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {members
            .filter((m) => m.role === "会长" || m.role === "副会长")
            .map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-lg overflow-hidden">
                    {isImageUrl(member.avatar) ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      member.avatar
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {member.contact && (
                    <div className="flex gap-3 text-sm text-gray-500">
                      {member.contact.email && (
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="hover:text-primary"
                        >
                          📧
                        </a>
                      )}
                      {member.contact.github && (
                        <a
                          href={member.contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          💻
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 部长团 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">⭐</span>
          部长团
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {members
            .filter((m) => m.role.includes("部长"))
            .map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-purple-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow overflow-hidden">
                  {isImageUrl(member.avatar) ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    member.avatar
                  )}
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 核心成员 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">💎</span>
          核心成员
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {members
            .filter((m) => m.role === "核心成员")
            .map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow overflow-hidden">
                  {isImageUrl(member.avatar) ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    member.avatar
                  )}
                </div>
                <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 加入我们 */}
      <section className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">加入我们</h2>
        <p className="text-lg mb-6 opacity-90">
          我们欢迎所有对技术充满热情的同学！
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:info@association.com"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            立即报名
          </a>
          <a
            href="/about"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            了解更多
          </a>
        </div>
      </section>
    </div>
  );
}
