---
id: packet-format
title: Smart Packet Format
description: Learn how to structure a Smart Packet using the SPID Protocol schema — including voice, transcript, intent, and CTAs.
sidebar_position: 3
---

# 📦 Smart Packet Format

A **Smart Packet** is the core content unit of the SPID Protocol — a portable, structured answer designed to be understood by both humans and AI assistants.

Each packet contains a mix of audio, text, metadata, and action logic — and follows a predictable JSON schema.

---

## 🧱 Required Fields

```json
{
  "id": "spid:yourdomain:welcome",
  "voice": "https://cdn.yourdomain.com/audio/welcome.mp3",
  "transcript": "Welcome to our service! Here's how to get started.",
  "intent": "welcome/getting-started",
  "cta": [ ... ],
  "meta": { ... }
}

Field
Type
Description
id
string
Unique SPID identifier (e.g. spid:yourdomain:faq123)
voice
string
URL to a short audio file (MP3 or Ogg)
transcript
string
Text version of the spoken message
intent
string
Semantic intent tag (e.g. product/quote, support/contact)
cta
array
Up to 3 Call-to-Action buttons
meta
object
Metadata (author, tags, timestamps, language, etc.)


🎯 CTA Button Schema
CTAs guide users to take the next step. Each CTA has a type, label, and action.
{
  "type": "link",
  "label": "Visit Website",
  "url": "https://example.com"
}

Supported type values:
Type
Description
link
Open a URL in a browser tab
call
Initiate a phone call
sms
Preload an SMS message
calendar
Open a scheduling link
form
Direct to a lead capture form
email
Open mail client with preset email

You can include up to three CTA objects in a Smart Packet.

🏷️ Metadata Fields (meta)
The meta object helps systems classify and filter packets.
"meta": {
  "author": "Jane Doe",
  "created": "2025-05-28",
  "language": "en",
  "tags": ["onboarding", "faq"],
  "expires": "2025-12-31"
}

Field
Type
Description
author
string
Creator name or org
created
string
ISO timestamp
language
string
Language code (e.g. en, es)
tags
array
Optional search/filter tags
expires
string
Optional expiry date


🧪 Best Practices
Keep voice recordings under 30 seconds.


Ensure transcript and audio match exactly.


Use clear, specific intent labels (like insurance/quote or sales/demo).


Limit CTAs to what makes sense in context — fewer buttons = more clarity.



✅ Validation
You can validate your Smart Packets using the upcoming SPID Validator CLI or API. (Coming soon)

Smart Packets are the new building blocks of human + AI interaction.
 They’re voice-native, AI-readable, and action-ready.