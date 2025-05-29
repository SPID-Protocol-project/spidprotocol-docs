---

id: spec
title: Spécification du Protocole SPID
description: La base technique du protocole SPID — incluant la résolution, la structure du registre et les exigences de conformité.
sidebar\_position: 5
--------------------

# Spécification du Protocole SPID

Le **protocole SPID** définit une norme ouverte et structurée pour publier, découvrir et interagir avec des **Smart Packets** via des identifiants uniques (PulseIDs).

Cette spécification décrit comment les systèmes **stockent**, **résolvent** et **acheminent** les Smart Packets en utilisant le système d'identité et de registre SPID.

---

## 1. Vue d'ensemble de la résolution

Les Smart Packets sont résolus en interrogeant un résolveur compatible SPID à l'aide d'un **PulseID** ou d'une **étiquette d'intention**.

### Entrée :

```json
{
  "query": "spid:creator:elena-podcast"
}
```

### Sortie :

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

Le résolveur SPID DOIT prendre en charge :

* La résolution d'ID exacts (par exemple spid\:brand\:xyz-support)
* Le filtrage basé sur l'intention (par exemple support/faq)
* Le repli basé sur les étiquettes ou les métadonnées

---

## 2. Registre d'identité

Chaque PulseID correspond à un enregistrement JSON incluant :

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

Cela permet aux systèmes de :

* Récupérer tous les Smart Packets publiés pour une identité donnée
* Acheminer de nouveaux messages vocaux vers des boîtes de réception ou des bots
* Déterminer si la source est vérifiée

---

## 3. Confiance et sécurité

Les systèmes conformes au SPID DEVRAIENT :

* Signer les packets avec un jeton vérifiable ou une clé publique
* Vérifier l'autorité avant d'afficher les packets à l'utilisateur
* Respecter les métadonnées d'expiration (champ `expires`)

Optionnel :

* Utiliser des enregistrements DNS TXT pour valider la propriété des IDs `spid:domain:*`
* Inclure des signatures HTTPS pour les transferts sécurisés entre agents

---

## 4. Structure des intentions

Les chaînes d'intention suivent un format prévisible de type chemin :
`[catégorie]/[action]` ou `[sujet]/[contexte]`

Exemples :

* insurance/quote
* onboarding/welcome
* product/demo

Les systèmes d'IA peuvent utiliser ces intentions pour la recherche, le regroupement ou la logique de transfert.

---

## 5. Critères de conformité

Pour être conforme au SPID, un système doit :

* Servir ou récupérer des packets conformes au format Smart Packet
* Accepter les requêtes PulseID via une API ou un registre
* Respecter la logique d'acheminement basée sur l'intention et les métadonnées
* Prendre en charge les paires voix + transcription
* Limiter les CTAs aux types définis dans le schéma

---

## Extensions futures

Les extensions prévues incluent :

* Transfert de packets entre agents
* Modèles de registre distribué (utilisant DNS ou DHT)
* Encodage en temps réel voix → Smart Packet
* Boîtes de réception autorisées et fils asynchrones
* Intégration Schema.org et JSON-LD pour l'indexation sémantique

---

Le protocole SPID transforme la connaissance en une couche vocale, fiable et accessible du Web — optimisée pour l'IA, mais au service des humains.
