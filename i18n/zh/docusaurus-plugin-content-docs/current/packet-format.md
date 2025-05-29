---

id: packet-format
title: 智能数据包格式
description: 了解如何使用 SPID 协议的结构编写 Smart Packet，包括语音、文字稿、意图和 CTA。
sidebar\_position: 3
--------------------

# 智能数据包格式

**Smart Packet（智能数据包）** 是 SPID 协议的核心内容单元 —— 一种便携的、结构化的答案格式，旨在让人类和 AI 助手都能理解。

每个数据包包含音频、文字、元数据和动作逻辑，并遵循可预测的 JSON 模式。

---

## 必填字段

```json
{
  "id": "spid:yourdomain:welcome",
  "voice": "https://cdn.yourdomain.com/audio/welcome.mp3",
  "transcript": "Welcome to our service! Here's how to get started.",
  "intent": "welcome/getting-started",
  "cta": [ ... ],
  "meta": { ... }
}
```

| 字段         | 类型     | 描述                                       |
| ---------- | ------ | ---------------------------------------- |
| id         | string | 唯一 SPID 标识符（例如 spid\:yourdomain\:faq123） |
| voice      | string | 指向简短音频文件的 URL（MP3 或 Ogg）                 |
| transcript | string | 语音信息的文本版本                                |
| intent     | string | 语义意图标签（例如 product/quote）                 |
| cta        | array  | 最多包含 3 个 Call-to-Action 按钮               |
| meta       | object | 元数据（作者、标签、时间戳、语言等）                       |

---

## CTA 按钮结构

CTA 引导用户采取下一步行动。每个 CTA 包含类型、标签和动作。

```json
{
  "type": "link",
  "label": "访问网站",
  "url": "https://example.com"
}
```

支持的 type 值：

| 类型       | 描述        |
| -------- | --------- |
| link     | 在浏览器中打开链接 |
| call     | 发起电话呼叫    |
| sms      | 预设短信内容    |
| calendar | 打开预约页面    |
| form     | 跳转至表单页面   |
| email    | 打开发邮件客户端  |

你最多可以在一个 Smart Packet 中添加 3 个 CTA 对象。

---

## 元数据字段（meta）

meta 对象有助于系统分类和筛选数据包。

```json
"meta": {
  "author": "Jane Doe",
  "created": "2025-05-28",
  "language": "en",
  "tags": ["onboarding", "faq"],
  "expires": "2025-12-31"
}
```

| 字段       | 类型     | 描述            |
| -------- | ------ | ------------- |
| author   | string | 创建者姓名或机构      |
| created  | string | ISO 格式时间戳     |
| language | string | 语言代码（如 en、zh） |
| tags     | array  | 可选标签用于搜索或筛选   |
| expires  | string | 可选字段，表示过期时间   |

---

## 最佳实践

* 语音录音时长建议控制在 30 秒以内。
* 确保 transcript 和 audio 内容完全一致。
* 使用清晰、具体的 intent 标签（例如 insurance/quote）。
* CTA 按钮应简明、有上下文 —— 按钮越少，越清晰。

---

## 验证

你可以使用即将推出的 SPID Validator CLI 或 API 来验证 Smart Packets。

Smart Packet 是人与 AI 交互的新型构建单元。
它们原生支持语音、可供 AI 阅读、并具备行动指令。
