export interface Member {
  name: string;
  role: string;
  avatar: string; // emoji
  bio: string;
  skills: string[];
  contact?: {
    email?: string;
    github?: string;
    wechat?: string;
  };
}

export function getMembers(): Member[] {
  return [
    // 会长团
    {
      name: "张晓明",
      role: "会长",
      avatar: "👨‍💼",
      bio: "计算机科学专业，全栈开发工程师，热爱开源",
      skills: ["Node.js", "React", "Python", "DevOps"],
      contact: {
        email: "zhangxiaoming@example.com",
        github: "https://github.com/zhangxiaoming",
      },
    },
    {
      name: "李梅",
      role: "副会长",
      avatar: "👩‍💼",
      bio: "软件工程专业，前端开发专家，UX设计师",
      skills: ["React", "Vue", "UI/UX", "TypeScript"],
      contact: {
        email: "limei@example.com",
        github: "https://github.com/limei",
      },
    },
    {
      name: "王强",
      role: "副会长",
      avatar: "🧑‍💻",
      bio: "人工智能专业，机器学习研究者",
      skills: ["Python", "TensorFlow", "PyTorch", "数据科学"],
      contact: {
        email: "wangqiang@example.com",
        github: "https://github.com/wangqiang",
      },
    },

    // 部长团
    {
      name: "陈浩",
      role: "技术部部长",
      avatar: "💻",
      bio: "后端开发工程师，云原生技术爱好者",
      skills: ["Java", "Spring", "Docker", "K8s"],
      contact: {
        github: "https://github.com/chenhao",
      },
    },
    {
      name: "刘婷",
      role: "宣传部部长",
      avatar: "📢",
      bio: "新媒体运营，擅长内容创作和设计",
      skills: ["新媒体", "设计", "文案", "运营"],
    },
    {
      name: "赵磊",
      role: "活动部部长",
      avatar: "🎯",
      bio: "项目管理专家，活动策划达人",
      skills: ["项目管理", "活动策划", "团队协作"],
    },
    {
      name: "孙丽",
      role: "外联部部长",
      avatar: "🤝",
      bio: "商务沟通专家，企业资源对接",
      skills: ["商务谈判", "资源整合", "合作对接"],
    },

    // 核心成员
    {
      name: "周杰",
      role: "核心成员",
      avatar: "🎨",
      bio: "UI/UX设计师",
      skills: ["Figma", "Sketch", "UI设计"],
    },
    {
      name: "吴静",
      role: "核心成员",
      avatar: "📱",
      bio: "移动端开发工程师",
      skills: ["React Native", "Flutter", "iOS"],
    },
    {
      name: "郑伟",
      role: "核心成员",
      avatar: "🔧",
      bio: "DevOps工程师",
      skills: ["CI/CD", "Docker", "Linux"],
    },
    {
      name: "黄芳",
      role: "核心成员",
      avatar: "📊",
      bio: "数据分析师",
      skills: ["Python", "SQL", "数据可视化"],
    },
    {
      name: "林涛",
      role: "核心成员",
      avatar: "🎮",
      bio: "游戏开发工程师",
      skills: ["Unity", "C#", "游戏设计"],
    },
    {
      name: "徐敏",
      role: "核心成员",
      avatar: "🔐",
      bio: "网络安全研究者",
      skills: ["安全测试", "渗透测试", "CTF"],
    },
    {
      name: "马超",
      role: "核心成员",
      avatar: "🌐",
      bio: "全栈开发工程师",
      skills: ["Vue", "Node.js", "MongoDB"],
    },
    {
      name: "何丹",
      role: "核心成员",
      avatar: "📝",
      bio: "技术写作者",
      skills: ["技术写作", "文档", "教程"],
    },
    {
      name: "曾鹏",
      role: "核心成员",
      avatar: "🤖",
      bio: "AI应用开发者",
      skills: ["GPT", "LangChain", "AI应用"],
    },
    {
      name: "高娜",
      role: "核心成员",
      avatar: "🎬",
      bio: "视频制作与剪辑",
      skills: ["PR", "AE", "视频制作"],
    },
  ];
}
