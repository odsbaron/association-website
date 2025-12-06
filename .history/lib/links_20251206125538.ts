export interface Link {
  name: string;
  url: string;
  description: string;
  icon: string;
  tags?: string[];
}

export interface LinkCategory {
  name: string;
  description: string;
  icon: string;
  links: Link[];
}

export function getLinkCategories(): LinkCategory[] {
  return [
    {
      name: "官方平台",
      description: "协会官方社交媒体和平台",
      icon: "🏢",
      links: [
        {
          name: "微信公众号",
          url: "#",
          description: "关注我们的官方公众号，获取最新动态",
          icon: "💬",
          tags: ["官方", "推荐"],
        },
        {
          name: "GitHub组织",
          url: "https://github.com/PKUAFT25",
          description: "查看我们的开源项目和代码仓库",
          icon: "💻",
          tags: ["开源", "代码"],
        },
        {
          name: "哔哩哔哩",
          url: "https://bilibili.com",
          description: "技术分享视频和活动录播",
          icon: "📺",
          tags: ["视频", "教程"],
        },
        {
          name: "知乎专栏",
          url: "https://zhihu.com",
          description: "技术文章和经验分享",
          icon: "📚",
          tags: ["文章", "分享"],
        },
      ],
    },
    {
      name: "学习资源",
      description: "精选的学习资料和教程",
      icon: "📖",
      links: [
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          description: "Web开发权威文档",
          icon: "🌐",
          tags: ["前端", "文档"],
        },
        {
          name: "FreeCodeCamp",
          url: "https://freecodecamp.org",
          description: "免费编程学习平台",
          icon: "🎓",
          tags: ["教程", "免费"],
        },
        {
          name: "LeetCode",
          url: "https://leetcode.com",
          description: "算法题库和编程练习",
          icon: "💡",
          tags: ["算法", "刷题"],
        },
        {
          name: "Coursera",
          url: "https://coursera.org",
          description: "在线课程平台",
          icon: "🎯",
          tags: ["课程", "学习"],
        },
        {
          name: "GitHub Student Pack",
          url: "https://education.github.com/pack",
          description: "学生开发者工具包",
          icon: "🎁",
          tags: ["学生", "福利"],
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com",
          description: "程序员问答社区",
          icon: "❓",
          tags: ["问答", "社区"],
        },
      ],
    },
    {
      name: "开发工具",
      description: "常用开发工具和服务",
      icon: "🛠️",
      links: [
        {
          name: "VS Code",
          url: "https://code.visualstudio.com",
          description: "微软开源代码编辑器",
          icon: "📝",
          tags: ["编辑器", "免费"],
        },
        {
          name: "Figma",
          url: "https://figma.com",
          description: "在线UI设计工具",
          icon: "🎨",
          tags: ["设计", "协作"],
        },
        {
          name: "Vercel",
          url: "https://vercel.com",
          description: "前端项目部署平台",
          icon: "🚀",
          tags: ["部署", "托管"],
        },
        {
          name: "Docker",
          url: "https://docker.com",
          description: "容器化平台",
          icon: "🐳",
          tags: ["容器", "DevOps"],
        },
        {
          name: "Postman",
          url: "https://postman.com",
          description: "API开发测试工具",
          icon: "📮",
          tags: ["API", "测试"],
        },
        {
          name: "Notion",
          url: "https://notion.so",
          description: "知识管理和协作工具",
          icon: "📋",
          tags: ["笔记", "协作"],
        },
      ],
    },
    {
      name: "技术社区",
      description: "优质技术社区和论坛",
      icon: "👥",
      links: [
        {
          name: "掘金",
          url: "https://juejin.cn",
          description: "中文技术社区",
          icon: "⛏️",
          tags: ["中文", "社区"],
        },
        {
          name: "V2EX",
          url: "https://v2ex.com",
          description: "创意工作者社区",
          icon: "🌟",
          tags: ["社区", "讨论"],
        },
        {
          name: "DEV Community",
          url: "https://dev.to",
          description: "程序员写作社区",
          icon: "✍️",
          tags: ["博客", "英文"],
        },
        {
          name: "Reddit r/programming",
          url: "https://reddit.com/r/programming",
          description: "国际程序员论坛",
          icon: "🗨️",
          tags: ["论坛", "英文"],
        },
      ],
    },
    {
      name: "合作伙伴",
      description: "校企合作单位和友好组织",
      icon: "🤝",
      links: [
        {
          name: "某科技公司",
          url: "#",
          description: "提供实习岗位和技术指导",
          icon: "🏢",
          tags: ["合作", "实习"],
        },
        {
          name: "某创业公司",
          url: "#",
          description: "项目合作伙伴",
          icon: "🚀",
          tags: ["项目", "合作"],
        },
        {
          name: "兄弟院校社团",
          url: "#",
          description: "交流合作",
          icon: "🎓",
          tags: ["社团", "交流"],
        },
      ],
    },
    {
      name: "推荐阅读",
      description: "优质技术博客和资讯站",
      icon: "📰",
      links: [
        {
          name: "阮一峰的网络日志",
          url: "https://ruanyifeng.com/blog",
          description: "技术周刊和编程教程",
          icon: "📖",
          tags: ["博客", "周刊"],
        },
        {
          name: "Hacker News",
          url: "https://news.ycombinator.com",
          description: "科技新闻聚合",
          icon: "📡",
          tags: ["新闻", "科技"],
        },
        {
          name: "InfoQ",
          url: "https://infoq.cn",
          description: "软件开发资讯",
          icon: "ℹ️",
          tags: ["资讯", "技术"],
        },
      ],
    },
  ];
}
