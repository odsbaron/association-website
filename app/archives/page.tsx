"use client";

import { getArchiveCategories } from "@/lib/archives";
import { useState } from "react";

export default function ArchivesPage() {
  const categories = getArchiveCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">资料库</h1>
        <p className="text-gray-600">协会活动记录、文档资料和学习资源</p>
      </div>

      {/* 分类筛选 */}
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          全部
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* 资料列表 */}
      <div className="space-y-8">
        {filteredCategories.map((category) => (
          <section key={category.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>📅 {item.date}</span>
                        {item.author && <span>👤 {item.author}</span>}
                        {item.size && <span>📦 {item.size}</span>}
                      </div>
                    </div>
                    <div className="text-4xl ml-4">{item.icon}</div>
                  </div>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    {item.viewUrl && (
                      <a
                        href={item.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary-600 transition-colors"
                      >
                        查看
                      </a>
                    )}
                    {item.downloadUrl && (
                      <a
                        href={item.downloadUrl}
                        download
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors"
                      >
                        下载
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 使用说明 */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-xl">📌</span>
          使用说明
        </h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• 点击"查看"在线浏览文档</li>
          <li>• 点击"下载"保存到本地</li>
          <li>• 部分资料可能需要登录或特定权限</li>
          <li>• 如需上传资料，请联系管理员</li>
          <li>• 资料仅供学习交流使用，请勿用于商业目的</li>
        </ul>
      </div>
    </div>
  );
}
