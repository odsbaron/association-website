export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
  type?: "milestone" | "event";
  details?: string[];
}

export function getTimelineEvents(): TimelineEvent[] {
  return [
    {
      date: "2020年9月",
      title: "协会正式成立",
      description: "经过精心筹备，协会在金秋九月正式成立，首批成员30人。",
      icon: "🎉",
      type: "milestone",
      details: [
        "召开第一次全体成员大会",
        "选举产生首届会长团",
        "确定协会章程和发展方向"
      ]
    },
    {
      date: "2020年10月",
      title: "首次技术分享会",
      description: "举办协会第一次技术分享会，主题为《Web开发入门》，吸引了50多名同学参加。",
      icon: "💻",
      type: "event",
      details: [
        "分享HTML/CSS/JavaScript基础",
        "现场互动答疑环节",
        "成功发展10名新成员"
      ]
    },
    {
      date: "2021年3月",
      title: "首届编程竞赛",
      description: "成功举办协会首届编程竞赛，共有80名选手参赛。",
      icon: "🏆",
      type: "milestone",
      details: [
        "算法题目设计",
        "现场评审和颁奖",
        "优秀选手作品展示"
      ]
    },
    {
      date: "2021年6月",
      title: "成员突破100人",
      description: "经过一年的发展，协会成员数量突破100人，成为学院最活跃的技术社团之一。",
      icon: "👥",
      type: "milestone"
    },
    {
      date: "2021年9月",
      title: "官方网站上线",
      description: "协会官方网站正式上线，为成员提供更好的信息交流平台。",
      icon: "🌐",
      type: "event",
      details: [
        "基于现代技术栈开发",
        "支持文章发布和资料分享",
        "移动端完美适配"
      ]
    },
    {
      date: "2022年3月",
      title: "首届Hackathon",
      description: "举办24小时黑客马拉松活动，6支队伍展示了精彩的创意项目。",
      icon: "⚡",
      type: "event",
      details: [
        "创意项目孵化",
        "团队协作挑战",
        "导师现场指导"
      ]
    },
    {
      date: "2022年6月",
      title: "校企合作项目启动",
      description: "与多家知名科技公司建立合作关系，为成员提供实习和项目机会。",
      icon: "🤝",
      type: "milestone",
      details: [
        "签订3家企业合作协议",
        "提供20+实习岗位",
        "开展企业技术分享"
      ]
    },
    {
      date: "2023年1月",
      title: "开源项目计划",
      description: "启动协会开源项目计划，鼓励成员参与开源社区贡献。",
      icon: "🔓",
      type: "event",
      details: [
        "建立GitHub组织",
        "发起5个开源项目",
        "举办开源贡献工作坊"
      ]
    },
    {
      date: "2023年6月",
      title: "成立技术讲师团队",
      description: "组建专业的技术讲师团队，定期为成员提供高质量的技术培训。",
      icon: "👨‍🏫",
      type: "event"
    },
    {
      date: "2023年9月",
      title: "协会三周年庆典",
      description: "举办盛大的三周年庆典活动，回顾发展历程，展望美好未来。",
      icon: "🎊",
      type: "milestone",
      details: [
        "成员突破200人",
        "举办50+场技术活动",
        "获得学院优秀社团称号"
      ]
    },
    {
      date: "2024年1月",
      title: "AI技术研究小组成立",
      description: "紧跟技术潮流，成立AI技术研究小组，探索人工智能在各领域的应用。",
      icon: "🤖",
      type: "event",
      details: [
        "深度学习技术研究",
        "AI应用项目开发",
        "举办AI主题讲座"
      ]
    },
    {
      date: "2024年3月",
      title: "协会网站全面升级",
      description: "官方网站进行全面升级改版，采用最新技术栈，提供更好的用户体验。",
      icon: "✨",
      type: "event",
      details: [
        "Next.js 14 + TypeScript",
        "响应式设计优化",
        "新增多项功能模块"
      ]
    }
  ];
}
