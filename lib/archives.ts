export interface ArchiveItem {
  title: string;
  description: string;
  date: string;
  author?: string;
  icon: string;
  tags?: string[];
  viewUrl?: string;
  downloadUrl?: string;
  size?: string;
}

export interface ArchiveCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: ArchiveItem[];
}

export function getArchiveCategories(): ArchiveCategory[] {
  return [
    {
      id: "activities",
      name: "活动记录",
      description: "历次活动的总结和照片",
      icon: "🎯",
      items: [
        {
          title: "2024年春季技术分享会总结",
          description: "包含活动流程、分享内容和现场照片",
          date: "2024-03-20",
          author: "李四",
          icon: "📋",
          tags: ["活动", "技术分享"],
          viewUrl: "/blog/2024-03-activity-summary",
          size: "2.5 MB",
        },
        {
          title: "2023年Hackathon活动记录",
          description: "24小时黑客马拉松完整记录",
          date: "2023-11-15",
          author: "张三",
          icon: "⚡",
          tags: ["Hackathon", "竞赛"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "5.2 MB",
        },
        {
          title: "2023年度总结大会PPT",
          description: "协会年度工作总结演示文稿",
          date: "2023-12-30",
          author: "管理员",
          icon: "📊",
          tags: ["总结", "PPT"],
          downloadUrl: "#",
          size: "8.1 MB",
        },
      ],
    },
    {
      id: "documents",
      name: "规章制度",
      description: "协会章程和管理制度文档",
      icon: "📜",
      items: [
        {
          title: "协会章程（2024版）",
          description: "协会最新修订的章程文件",
          date: "2024-01-10",
          icon: "📄",
          tags: ["章程", "制度"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "156 KB",
        },
        {
          title: "会员管理制度",
          description: "会员权利义务和管理规定",
          date: "2024-01-10",
          icon: "👥",
          tags: ["制度", "管理"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "98 KB",
        },
        {
          title: "财务管理办法",
          description: "协会财务收支管理规定",
          date: "2024-01-10",
          icon: "💰",
          tags: ["财务", "制度"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "78 KB",
        },
      ],
    },
    {
      id: "tutorials",
      name: "技术文档",
      description: "技术教程和学习资料",
      icon: "📚",
      items: [
        {
          title: "Git使用指南",
          description: "从零开始学习Git版本控制",
          date: "2024-02-15",
          author: "赵同学",
          icon: "🌿",
          tags: ["Git", "教程"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "1.2 MB",
        },
        {
          title: "React入门教程",
          description: "React框架基础知识和实战",
          date: "2024-02-20",
          author: "王同学",
          icon: "⚛️",
          tags: ["React", "前端"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "3.5 MB",
        },
        {
          title: "Python数据分析实战",
          description: "使用Python进行数据分析的完整教程",
          date: "2024-03-01",
          author: "刘同学",
          icon: "🐍",
          tags: ["Python", "数据分析"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "4.8 MB",
        },
        {
          title: "Docker容器化指南",
          description: "Docker基础到进阶完整教程",
          date: "2024-03-10",
          author: "陈同学",
          icon: "🐳",
          tags: ["Docker", "DevOps"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "2.1 MB",
        },
      ],
    },
    {
      id: "meetings",
      name: "会议纪要",
      description: "重要会议的记录和决议",
      icon: "📝",
      items: [
        {
          title: "2024年第一次会长团会议纪要",
          description: "讨论新学期工作计划",
          date: "2024-03-05",
          icon: "📋",
          tags: ["会议", "纪要"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "245 KB",
        },
        {
          title: "2024年春季全体成员大会纪要",
          description: "部署新学期各项工作",
          date: "2024-03-12",
          icon: "📋",
          tags: ["大会", "纪要"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "312 KB",
        },
      ],
    },
    {
      id: "resources",
      name: "学习资源",
      description: "精选学习资料和工具",
      icon: "🎁",
      items: [
        {
          title: "前端开发资源合集",
          description: "精选前端开发工具、框架和教程",
          date: "2024-01-20",
          icon: "💻",
          tags: ["前端", "资源"],
          viewUrl: "#",
          size: "125 KB",
        },
        {
          title: "算法与数据结构题库",
          description: "LeetCode经典题目整理",
          date: "2024-02-05",
          icon: "💡",
          tags: ["算法", "题库"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "856 KB",
        },
        {
          title: "设计模式学习资料",
          description: "常用设计模式讲解和示例代码",
          date: "2024-02-18",
          icon: "🎨",
          tags: ["设计模式", "编程"],
          viewUrl: "#",
          downloadUrl: "#",
          size: "1.8 MB",
        },
        {
          title: "开源项目推荐列表",
          description: "值得学习的优秀开源项目",
          date: "2024-03-01",
          icon: "⭐",
          tags: ["开源", "项目"],
          viewUrl: "#",
          size: "98 KB",
        },
      ],
    },
    {
      id: "templates",
      name: "模板文件",
      description: "常用文档模板",
      icon: "📋",
      items: [
        {
          title: "活动策划方案模板",
          description: "用于编写活动策划文档",
          date: "2024-01-15",
          icon: "📝",
          tags: ["模板", "活动"],
          downloadUrl: "#",
          size: "45 KB",
        },
        {
          title: "技术分享PPT模板",
          description: "协会统一PPT设计模板",
          date: "2024-01-15",
          icon: "🎨",
          tags: ["模板", "PPT"],
          downloadUrl: "#",
          size: "2.3 MB",
        },
        {
          title: "项目文档模板",
          description: "软件项目文档编写模板",
          date: "2024-01-15",
          icon: "📄",
          tags: ["模板", "文档"],
          downloadUrl: "#",
          size: "128 KB",
        },
      ],
    },
  ];
}
