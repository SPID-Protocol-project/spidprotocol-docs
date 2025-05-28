---
id: getting-started
title: Getting Started
description: Step-by-step guide to creating your first Smart Packet and using the SPID Protocol.
sidebar_position: 2
---

# Getting Started with SPID Protocol

Welcome! This guide will walk you through the essential steps to begin using the **SPID Protocol** and creating your first **Smart Packet**.

---

## 📦 What You’ll Need

Before you begin, make sure you have:

- A GitHub account (to contribute or clone the spec)
- Basic familiarity with JSON and web development
- Optional: A voice assistant or web app you’d like to integrate with Smart Packets

---

## 🛠️ Step 1: Create Your First Smart Packet

A **Smart Packet** is a structured answer unit. Here’s a minimal example:

```json
{
  "id": "spid:example:welcome",
  "voice": "https://cdn.example.com/audio/welcome.mp3",
  "transcript": "Welcome to the SPID Protocol. Here’s how to get started.",
  "intent": "welcome/getting-started",
  "cta": [
    {
      "type": "link",
      "label": "View Docs",
      "url": "https://spidprotocol.org/docs"
    }
  ],
  "meta": {
    "author": "SPID Foundation",
    "created": "2025-05-28",
    "language": "en"
  }
}

You can create Smart Packets manually or generate them using tools we’ll provide soon (Pulse Studio, CLI tools, etc.).

🆔 Step 2: Register a PulseID
A PulseID is your voice-first identity — it lets others (humans or agents) send or receive Smart Packets from you.
You can:
Register a PulseID via PulseID Directory


Associate it with your domain, organization, or persona


Use it to resolve and route packets to your async inbox or voice assistant


Example:
 spid:yourdomain:customer-support
 spid:creator:elena-podcast-intro

🧭 Step 3: Integrate With Your Assistant or App
Once you’ve created a Smart Packet, you can:
Embed it in your website or mobile app


Share it via SMS, email, or QR code


Allow your AI assistant (ChatGPT, Morty, VoiceMate, etc.) to retrieve it by SPID


Optional libraries and integrations will be available soon via NPM, Python, and REST APIs.

🤝 Step 4: Join the Community
Help us shape the future of async, AI-native voice communication:
⭐ Star the GitHub Repo


🛠️ Submit issues or feature requests


📢 Share your use case or implementation


📬 Sign up for updates at spidprotocol.org



🔄 What’s Next?
Smart Packet Format — Full breakdown of all fields and supported CTAs


SPID Spec — Deep dive into resolution, structure, and indexing


PulseID — Understanding voice-first identity and routing



You’re not just creating content. You’re creating AI-native answers that can be discovered, trusted, and acted on — by people or machines.