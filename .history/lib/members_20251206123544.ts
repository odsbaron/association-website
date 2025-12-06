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
      name: "欧岱松",
      role: "会长",
      avatar: "/images/avatars/25_oudaisong.jpg",
      bio: "25级数量金科  INFJ 热爱干饭和运动  量化研究探索中",
      skills: ["Python", "Linux","Redis","SQL"],
      contact: {
        email: "dsou25@stu.pku.edu.cn",
        github: "https://github.com/odsbaron",
      },
    },
    {
      name: "欧阳宏禹",
      role: "副会长",
      avatar: "/images/avatars/25_ouyanghongyu.jpg",
      bio: "25级数量金科 主要研究方向是股票多因子和深度学习模型",
      skills: ["啥都会"],
      contact: {
        email: "hyouyang25@stu.pku.edu.cn",
        github: "https://github.com/limei",
      },
    },
    {
      name: "郭禹宏",
      role: "副会长",
      avatar: "/images/avatars/25_guoyuhong.jpg",
      bio: "25级经济学双学位  ISTJ 喜欢摄影和历史  职业路径探索中 喜欢流程图很好看的模型",
      skills: ["Python",  "数据科学"],
      contact: {
        email: "yhguo25@stu.pku.edu.cn",
        github: "https://github.com/wangqiang",
      },
    },
    {
      name: "王一茗",
      role: "副会长",
      avatar: "/images/avatars/25_wangyiming.jpg",
      bio: "25级数量金科 INFJ  喜欢干饭和保卫萝卜 互联网数科/量化研究探索中",
      skills: ["Python", "TensorFlow", "PyTorch", "数据科学"],
      contact: {
        email: "ymwang@stu.pku.edu.cn",
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
