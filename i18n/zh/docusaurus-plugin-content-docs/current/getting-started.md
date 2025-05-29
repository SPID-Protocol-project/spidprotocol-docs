---

id: getting-started
title: 入门指南
description: 分步指南，教你如何创建第一个 Smart Packet 并使用 SPID 协议。
sidebar\_position: 2
--------------------

# 开始使用 SPID 协议

欢迎！本指南将带你完成使用 **SPID 协议** 并创建第一个 **Smart Packet** 的关键步骤。

---

## 你需要准备的内容

在开始之前，请确保你具备以下条件：

* 拥有 GitHub 账号（用于贡献或克隆协议文档）
* 了解基本的 JSON 和网页开发知识
* 可选：你希望集成 Smart Packets 的语音助手或 Web 应用

---

## 第一步：创建你的第一个 Smart Packet

**Smart Packet** 是一个结构化的回答单元。以下是一个最简示例：

```json
{
  "id": "spid:example:welcome",
  "voice": "https://cdn.example.com/audio/welcome.mp3",
  "transcript": "欢迎使用 SPID 协议。以下是入门步骤。",
  "intent": "welcome/getting-started",
  "cta": [
    {
      "type": "link",
      "label": "查看文档",
      "url": "https://spidprotocol.org/docs"
    }
  ],
  "meta": {
    "author": "SPID Foundation",
    "created": "2025-05-28",
    "language": "zh"
  }
}
```

你可以手动创建 Smart Packets，或者使用我们即将发布的工具（Pulse Studio、CLI 工具等）自动生成。

---

## 第二步：注册一个 PulseID

PulseID 是你的语音优先身份 —— 它允许他人（人或代理）向你发送或接收 Smart Packets。

你可以：

* 通过 PulseID 目录注册一个身份
* 将其与你的域名、组织或个性化角色关联
* 使用它将数据包路由到你的异步收件箱或语音助手

示例：

```
spid:yourdomain:customer-support
spid:creator:elena-podcast-intro
```

---

## 第三步：与助手或应用集成

创建 Smart Packet 后，你可以：

* 将其嵌入网站或移动应用中
* 通过短信、电子邮件或二维码分享
* 让你的 AI 助手（ChatGPT、Morty、VoiceMate 等）通过 SPID 解析它

我们将很快提供可选的 NPM、Python 和 REST API 集成库。

---

## 第四步：加入社区

帮助我们共同塑造异步、AI 原生语音通信的未来：

* Star GitHub 仓库
* 提交问题或功能建议
* 分享你的使用案例或实现方式
* 在 spidprotocol.org 注册获取更新

---

## 接下来要了解的内容

* Smart Packet 格式：详细字段说明和支持的 CTA 类型
* SPID 规范：关于解析、结构和索引的深度解析
* PulseID：理解语音优先身份和路由机制

你现在不仅是在创建内容。
你正在创建可被人类与机器发现、信任和执行的 AI 原生答案。
