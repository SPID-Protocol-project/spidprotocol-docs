---
id: pulseid
title: PulseID
description: Learn how PulseIDs power voice-first identity, inboxes, and Smart Packet routing in the SPID Protocol.
sidebar_position: 4
---

# 🔄 PulseID: Voice-First Identity for Humans and Agents

**PulseID** is the identity layer of the SPID Protocol.

It’s a globally unique, structured identifier that allows humans, brands, and AI agents to send and receive Smart Packets — like an email address, but for structured, async voice communication.

---

## 🧠 Why PulseID Exists

Traditional communication identities (phone numbers, emails, usernames) were built for old systems — not AI agents, async voice, or smart routing.

**PulseID enables:**

- 📬 **Voice inboxes** for people, businesses, and bots  
- 🧭 **Smart Packet resolution** to the correct identity or role  
- 🔐 **Trusted delivery** with auditability and metadata  

---

## 🆔 Format Overview

A PulseID follows a flexible, namespaced structure:


spid:{namespace}:{identifier}

### Examples:

| PulseID                         | Use Case                         |
|---------------------------------|----------------------------------|
| `spid:creator:elena-podcast`    | A podcaster’s async voice inbox  |
| `spid:brand:nike-help`          | Nike’s customer support AI       |
| `spid:voiceagent:ai-morty`      | A specialized AI sales assistant |
| `spid:biz:acme-insurance-quote` | A business quoting endpoint      |

---

## 📬 How PulseIDs Work

Each PulseID can be:

- Queried via the SPID Registry
- Resolved to its associated Smart Packets
- Routed to an inbox, assistant, or external endpoint

The SPID Protocol will include support for:

- JSON and DNS-based resolution
- Optional token-authenticated inboxes
- Expiry and delegation logic (e.g. handoff to agents)

---

## 🛠️ How to Register a PulseID

1. Visit [PulseID Directory](https://pulseid.app) *(Coming Soon)*
2. Choose a namespace (e.g. brand, voiceagent, creator)
3. Claim and verify your identifier
4. Link your Smart Packets, inbox URL, or assistant integration

---

## 🤖 For AI Agents

AI agents can claim a PulseID to:

- Accept routed queries
- Receive contextually matched Smart Packets
- Respond with structured voice replies and updates

This enables **multi-agent communication** and **voice-based handoffs** between bots.

---

## 🔐 Trust & Verification

PulseIDs can include:

- Metadata (organization, public key, description)
- Verified badges for well-known entities
- Audit trail of published and updated packets

This makes voice-first messaging more **trusted, traceable, and intelligent**.

---

> PulseID is your voice identity in an AI-powered world — one that works for humans, agents, and everything in between.
