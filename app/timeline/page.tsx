import { getTimelineEvents } from "@/lib/timeline";

export default function TimelinePage() {
  const events = getTimelineEvents();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">发展历程</h1>
        <p className="text-gray-600">记录协会成长的每一个重要时刻</p>
      </div>

      <div className="relative">
        {/* Timeline线 */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

        {/* 时间轴事件 */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative pl-20">
              {/* 时间点 */}
              <div className="absolute left-0 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">{event.icon}</span>
              </div>

              {/* 内容卡片 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                  {event.type === "milestone" && (
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      里程碑
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>

                {event.details && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-200">
                    <ul className="space-y-1 text-sm text-gray-600">
                      {event.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 结尾标记 */}
        <div className="relative pl-20 mt-12">
          <div className="absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">未来可期</h3>
            <p>继续前行，创造更多精彩...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
