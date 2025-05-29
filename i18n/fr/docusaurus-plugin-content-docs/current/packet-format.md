---
id: packet-format
title: Format d’un Smart Packet
description: Apprenez à structurer un Smart Packet avec le schéma du SPID Protocol — y compris voix, transcription, intention et CTAs.
sidebar_position: 3
---

# Format de Smart Packet

Un **Smart Packet** est l’unité de contenu principale du SPID Protocol — une réponse structurée et portable, conçue pour être comprise à la fois par les humains et les assistants IA.

Chaque packet contient un mélange d’audio, de texte, de métadonnées et de logique d’action — et suit un schéma JSON prévisible.

## Champs Requis

```json
{
  "id": "spid:yourdomain:welcome",
  "voice": "https://cdn.yourdomain.com/audio/welcome.mp3",
  "transcript": "Welcome to our service! Here's how to get started.",
  "intent": "welcome/getting-started",
  "cta": [ ... ],
  "meta": { ... }
}
```

| Champ      | Type   | Description                                            |
| ---------- | ------ | ------------------------------------------------------ |
| id         | string | Identifiant SPID unique (ex. spid\:yourdomain\:faq123) |
| voice      | string | URL vers un fichier audio court (MP3 ou Ogg)           |
| transcript | string | Version texte du message vocal                         |
| intent     | string | Tag d’intention sémantique (ex. produit/devis)         |
| cta        | array  | Jusqu’à 3 boutons d’appel à l’action                   |
| meta       | object | Métadonnées (auteur, tags, dates, langue, etc.)        |

## Schéma des CTA

Les CTA (Call-to-Action) guident les utilisateurs vers l’action suivante. Chaque CTA a un type, un libellé et une action.

```json
{
  "type": "link",
  "label": "Visiter le site",
  "url": "https://example.com"
}
```

| Type     | Description                                |
| -------- | ------------------------------------------ |
| link     | Ouvre une URL dans un onglet du navigateur |
| call     | Lance un appel téléphonique                |
| sms      | Préremplit un message SMS                  |
| calendar | Ouvre un lien de prise de rendez-vous      |
| form     | Redirige vers un formulaire de capture     |
| email    | Ouvre le client mail avec un brouillon     |

Vous pouvez inclure jusqu’à trois objets CTA dans un Smart Packet.

## Champs de Métadonnées (meta)

L’objet `meta` aide les systèmes à classer et filtrer les packets.

```json
"meta": {
  "author": "Jane Doe",
  "created": "2025-05-28",
  "language": "fr",
  "tags": ["onboarding", "faq"],
  "expires": "2025-12-31"
}
```

| Champ    | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| author   | string | Nom du créateur ou de l’organisation    |
| created  | string | Timestamp ISO                           |
| language | string | Code langue (ex. fr, en)                |
| tags     | array  | Tags optionnels pour recherche/filtrage |
| expires  | string | Date d’expiration facultative           |

## Bonnes Pratiques

* Gardez les enregistrements audio en dessous de 30 secondes
* Assurez-vous que la transcription et l’audio correspondent
* Utilisez des tags d’intention clairs et spécifiques (ex. assurance/devis)
* Limitez les CTA à ce qui est pertinent dans le contexte — moins de boutons = plus de clarté

## Validation

Vous pourrez bientôt valider vos Smart Packets avec le SPID Validator CLI ou API.

Les Smart Packets sont les nouveaux blocs de base de l’interaction entre humains et IA. Structurés, vocaux, lisibles par IA, et prêts à l’action.
