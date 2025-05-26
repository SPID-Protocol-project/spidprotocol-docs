# SPID Protocol SDK

The **SPID Protocol SDK** enables you to publish and retrieve Smart Packets — structured, voice-ready, AI-retrievable answers — using a lightweight, open standard designed for the AI Web. SPID is the routing layer that powers identity, intent, and resolution for asynchronous, AI-powered communication.

This is a production-ready evolution of our early work on Smart Packets, now formalized into an open schema and SDK for developers, publishers, and AI agents.

## Core Concepts

* **Smart Packets**: Structured voice messages with transcript, intent, metadata, and call-to-action (CTA) buttons
* **SPIDs**: Globally unique identifiers that resolve to Smart Packets
* **PulseIDs**: Async voice inboxes for people, businesses, or agents
* **Intents**: Descriptions of the message purpose with dynamic CTA generation

## Why Use the SPID Protocol SDK

### Design Principles

* **Structure over sprawl**: Clean, reproducible formatting and metadata
* **Human-first**: Designed for voice, identity, and permission-aware communication

### Key Features

* **Smart Packet Format**: Universal container for transcript, audio, CTAs, and identity
* **SPID Resolution**: Retrieve packets by SPID (e.g. `spid://rick.voicemate.id/lead-mortgage-0325`)
* **Intent Mapping**: Automatically infer and attach next-step CTAs
* **PulseID Routing**: Route replies to personal voice inboxes
* **Open Standards**: Fully open schema, no vendor lock-in

## Installation (coming soon)

```bash
npm install spid-sdk
```

```bash
pip install spid-protocol
```

## Hello World Packet (JSON)

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
```

## Intent Mapping Example

```json
{
  "intent": "book_meeting",
  "ctas": [
    { "label": "Schedule Now", "type": "calendar", "url": "https://calendly.com/rick-voicemate" },
    { "label": "Ask a Question", "type": "message", "target": "pulse://rick.voicemate.id" }
  ]
}
```

## How to Use

1. Generate a Smart Packet (voice + metadata)
2. Assign a SPID
3. Upload it to your SPID directory or server
4. Share or resolve it in AI assistants or apps

## Environment Variable (if needed)

```bash
export SPID_API_KEY=sk-...
```

## Learn More

* Official spec: [https://spidprotocol.org](https://spidprotocol.org)
* Packet viewer: [https://myvoicemate.com](https://myvoicemate.com)
