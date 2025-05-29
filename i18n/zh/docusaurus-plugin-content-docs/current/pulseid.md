---

id: pulseid
title: PulseID（脉冲身份标识）
description: 了解 PulseID 如何在 SPID 协议中驱动以语音为先的身份识别、收件箱与智能包路由。
sidebar\_position: 4
--------------------

# PulseID：为人类与智能体设计的语音优先身份

**PulseID** 是 SPID 协议的身份层。

它是一种全球唯一、结构化的标识符，让人类、品牌与 AI 智能体可以发送和接收智能包（Smart Packets）——就像电子邮件地址，但专为结构化、异步语音通信而设计。

---

## PulseID 的存在意义

传统的通信身份（电话号码、电子邮件、用户名）是为旧系统设计的——它们并不适合 AI 智能体、异步语音或智能路由。

**PulseID 使以下成为可能：**

* 为个人、企业和机器人提供语音收件箱
* 将智能包精准解析到正确的身份或角色
* 实现带有审计和元数据的可信投递

---

## 格式概览

PulseID 遵循一个灵活的命名空间结构：

```
spid:{namespace}:{identifier}
```

### 示例：

| PulseID                         | 用例            |
| ------------------------------- | ------------- |
| `spid:creator:elena-podcast`    | 播客创作者的异步语音收件箱 |
| `spid:brand:nike-help`          | Nike 的客户支持 AI |
| `spid:voiceagent:ai-morty`      | 专用的 AI 销售助理   |
| `spid:biz:acme-insurance-quote` | 商业报价端点        |

---

## PulseID 的工作方式

每个 PulseID 都可以：

* 通过 SPID 注册表进行查询
* 被解析为其关联的智能包
* 路由到收件箱、助理或外部端点

SPID 协议将支持：

* 基于 JSON 和 DNS 的解析
* 可选的令牌认证收件箱
* 过期与委派逻辑（如交接给代理）

---

## 如何注册一个 PulseID

1. 访问 [PulseID Directory](https://pulseid.app) *(即将上线)*
2. 选择命名空间（如 brand、voiceagent、creator）
3. 认领并验证您的标识符
4. 关联您的智能包、收件箱 URL 或助理集成

---

## 面向 AI 智能体

AI 智能体可以认领一个 PulseID 以：

* 接收被路由的查询
* 接收与上下文匹配的智能包
* 使用结构化语音回复与更新

这支持智能体之间的语音通信与异步交接。

---

## 信任与验证

PulseID 可包含：

* 元数据（组织信息、公钥、描述）
* 已验证徽章（用于知名实体）
* 已发布与更新包的审计记录

这使语音优先通信更加可信、可追踪、且智能化。

---

> PulseID 是您在 AI 世界中的语音身份——既为人类服务，也为智能体与其之间的沟通服务。
