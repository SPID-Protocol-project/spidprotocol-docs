---
title: SPID Protocol SDK
---

# SPID Protocol SDK

The **SPID Protocol SDK** enables you to publish and retrieve Smart Packets — structured, voice-ready, AI-retrievable answers — using a lightweight, open standard designed for the AI Web.

SPID is the routing layer that powers identity, intent, and resolution for asynchronous, AI-powered communication.

## Core Concepts

- **Smart Packets**: Structured voice messages with transcript, intent, metadata, and CTAs
- **SPIDs**: Globally unique identifiers that resolve to Smart Packets
- **PulseIDs**: Async voice inboxes for people, businesses, or agents
- **Intents**: Describe the purpose and auto-generate actions

## Why Use the SPID Protocol SDK

### Principles

- **Structure over sprawl** — clean formatting & metadata
- **Human-first** — built for voice, identity, and permission

### Key Features

- **Smart Packet Format**
- **SPID Resolution**
- **Intent-to-CTA Mapping**
- **PulseID Routing**
- **Open Schema / No Lock-in**

## Hello World Packet

```json
{
  "spid": "spid://demo.voicemate.id/welcome",
  "packet": {
    "title": "Welcome to VoiceMate!",
    "voice_url": "https://cdn.voicemate.id/audio/welcome.mp3",
    "transcript": "Hey there, welcome to your new voice inbox.",
    "intent": "onboard_user",
    "ctas": [
      { "label": "Learn More", "type": "link", "url": "https://voicemate.id/how-it-works" },
      { "label": "Get Your PulseID", "type": "link", "url": "https://voicemate.id/signup" }
    ]
  }
}
