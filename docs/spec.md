---
id: spec
title: SPID Protocol Specification
description: The technical foundation of the SPID Protocol — including resolution, registry structure, and compliance requirements.
sidebar_position: 5
---

# SPID Protocol Specification

The **SPID Protocol** defines a structured, open standard for publishing, discovering, and interacting with **Smart Packets** via unique identifiers (PulseIDs).

This spec outlines how systems **store**, **resolve**, and **route** Smart Packets using the SPID identity and registry system.

---

## 1. Resolution Overview

Smart Packets are resolved by querying a SPID-compatible resolver using a **PulseID** or **intent tag**.

### Input:
```json
{
  "query": "spid:creator:elena-podcast"
}

Output:
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

The SPID Resolver MUST support:
Exact ID resolution (e.g. spid:brand:xyz-support)


Intent-based filtering (e.g. support/faq)


Tag- or metadata-based fallback



2. Identity Registry
Each PulseID maps to a JSON record that includes:
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

This allows systems to:
Fetch all published Smart Packets for a given identity


Route new voice messages to inboxes or bots


Determine if the source is verified



3. Trust & Security
SPID-compliant systems SHOULD:
Sign packets with a verifiable token or public key


Verify authorship before displaying packets to users


Respect expiration metadata (expires field)


Optional:
Use DNS-based TXT records to validate ownership of spid:domain:* IDs


Include HTTPS-based signatures for secure handoff between agents



4. Intent Structure
Intent strings follow a predictable path-based format:
[category]/[action] or [topic]/[context]

Examples:
insurance/quote


onboarding/welcome


product/demo


AI systems can use these intents for retrieval, clustering, or handoff logic.

5. Compliance Criteria
To be SPID-compliant, a system must:
Serve or retrieve packets matching the Smart Packet Format


Accept SPID PulseID queries via API or registry


Respect routing logic based on intent and packet metadata


Support voice + transcript pairing


Limit CTAs to defined schema types



Future Extensions
Planned extensions include:
Cross-agent packet routing


Distributed registry models (using DNS or DHT)


Live voice-to-Smart Packet encoding


Permissioned inboxes and async threads


Schema.org and JSON-LD integration for semantic indexing



The SPID Protocol turns knowledge into a retrievable, trusted, voice-first layer of the web — optimized for AI, but owned by people.

---
