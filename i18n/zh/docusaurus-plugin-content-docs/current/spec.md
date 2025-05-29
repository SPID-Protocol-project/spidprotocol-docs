---

id: spec
title: SPID 协议规范
description: SPID 协议的技术基础——包括解析、注册结构与合规要求。
sidebar\_position: 5
--------------------

# SPID 协议规范

**SPID 协议** 定义了一种结构化的开放标准，用于通过唯一标识符（PulseID）发布、发现和交互 **Smart Packets（智能数据包）**。

本规范概述了系统如何使用 SPID 身份与注册系统 **存储**、**解析** 和 **路由** Smart Packets。

---

## 1. 解析概览

Smart Packets 可通过使用 **PulseID** 或 **intent 标签** 查询 SPID 兼容的解析器进行解析。

### 输入：

```json
{
  "query": "spid:creator:elena-podcast"
}
```

### 输出：

```json
{
  "packets": [
    {
      "id": "spid:creator:elena-podcast:intro",
      "voice": "...",
      "transcript": "...",
      "intent": "intro/show",
      "cta": [ ... ],
      "meta": { ... }
    }
  ]
}
```

SPID 解析器必须支持：

* 精确 ID 解析（如 spid\:brand\:xyz-support）
* 基于 intent 的过滤（如 support/faq）
* 基于标签或元数据的回退查询

---

## 2. 身份注册表

每个 PulseID 映射到一个 JSON 记录，包含：

```json
{
  "id": "spid:brand:acme",
  "displayName": "Acme Corp",
  "inboxUrl": "https://api.acme.com/inbox",
  "packetsUrl": "https://cdn.acme.com/spid/packets.json",
  "metadata": {
    "verified": true,
    "created": "2025-05-28",
    "tags": ["insurance", "mortgage", "quote"]
  }
}
```

系统可借此实现：

* 获取某身份已发布的所有 Smart Packets
* 将新语音消息路由到收件箱或机器人
* 判断来源是否已验证

---

## 3. 信任与安全

SPID 兼容系统应：

* 使用可验证令牌或公钥对数据包进行签名
* 在展示数据包前验证作者身份
* 尊重过期元数据（expires 字段）

可选增强：

* 使用 DNS TXT 记录验证 spid\:domain:\* ID 的所有权
* 使用基于 HTTPS 的签名确保代理间安全交接

---

## 4. Intent 结构

Intent 字符串采用路径格式：

```
[类别]/[操作] 或 [主题]/[上下文]
```

示例：

* insurance/quote
* onboarding/welcome
* product/demo

AI 系统可使用这些 intent 进行检索、聚类或代理间的逻辑交接。

---

## 5. 合规标准

要符合 SPID 规范，系统必须：

* 提供或检索符合 Smart Packet 格式的数据包
* 接受通过 API 或注册表的 PulseID 查询
* 遵守基于 intent 与元数据的路由逻辑
* 支持语音与文字稿的配对
* 限制 CTA 类型为定义的结构类型

---

## 未来扩展计划

计划中的扩展包括：

* 跨代理数据包路由
* 分布式注册模型（基于 DNS 或 DHT）
* 实时语音转 Smart Packet 编码
* 具有权限控制的异步语音线程
* Schema.org 与 JSON-LD 的语义索引集成

---

SPID 协议将知识转化为可检索、可信任、以语音为先的网络层 —— 为 AI 优化，由人类掌控。
