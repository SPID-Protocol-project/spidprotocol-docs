---

id: getting-started
title: Premiers Pas
description: Guide étape par étape pour créer votre premier Smart Packet et utiliser le SPID Protocol.
sidebar\_position: 2
--------------------

# Premiers Pas avec le SPID Protocol

Bienvenue ! Ce guide vous accompagnera dans les étapes essentielles pour commencer à utiliser le **SPID Protocol** et créer votre premier **Smart Packet**.

---

## Ce Dont Vous Aurez Besoin

Avant de commencer, assurez-vous d’avoir :

* Un compte GitHub (pour contribuer ou cloner le dépôt)
* Une compréhension de base du JSON et du développement web
* Optionnel : un assistant vocal ou une application à intégrer avec les Smart Packets

---

## Étape 1 : Créer votre Premier Smart Packet

Un **Smart Packet** est une unité de réponse structurée. Voici un exemple minimal :

```json
{
  "id": "spid:example:welcome",
  "voice": "https://cdn.example.com/audio/welcome.mp3",
  "transcript": "Bienvenue dans le SPID Protocol. Voici comment commencer.",
  "intent": "welcome/getting-started",
  "cta": [
    {
      "type": "link",
      "label": "Voir la documentation",
      "url": "https://spidprotocol.org/docs"
    }
  ],
  "meta": {
    "author": "SPID Foundation",
    "created": "2025-05-28",
    "language": "fr"
  }
}
```

Vous pouvez créer des Smart Packets manuellement ou les générer à l’aide des outils que nous proposerons bientôt (Pulse Studio, CLI, etc.).

---

## Étape 2 : Enregistrer un PulseID

Un **PulseID** est votre identité vocale asynchrone — il permet à d'autres personnes (ou agents) d’envoyer ou recevoir des Smart Packets de votre part.

Vous pouvez :

* Enregistrer un PulseID via le répertoire PulseID
* L’associer à votre domaine, organisation ou personnage
* L’utiliser pour acheminer des paquets vers votre boîte vocale ou assistant

Exemples :

* spid\:votredomaine\:support-client
* spid\:createur\:intro-podcast-elena

---

## Étape 3 : Intégrer à votre Assistant ou Application

Une fois votre Smart Packet créé, vous pouvez :

* L’intégrer à votre site web ou application mobile
* Le partager par SMS, e-mail ou QR code
* Permettre à votre assistant IA (ChatGPT, Morty, VoiceMate, etc.) de le récupérer par SPID

Des bibliothèques et intégrations optionnelles seront bientôt disponibles via NPM, Python et APIs REST.

---

## Étape 4 : Rejoindre la Communauté

Participez à la construction du futur de la communication vocale asynchrone :

* Mettre en favori le dépôt GitHub
* Soumettre des problèmes ou propositions d’amélioration
* Partager vos cas d’usage ou intégrations
* S’inscrire aux mises à jour sur [spidprotocol.org](https://spidprotocol.org)

---

## Prochaine Étape

* Format des Smart Packets — Détail complet des champs et CTA pris en charge
* Spécification SPID — Approfondissement sur la résolution, la structure et l’indexation
* PulseID — Comprendre l’identité vocale asynchrone et le routage

---

> Vous ne créez pas simplement du contenu. Vous créez des réponses AI-natives, accessibles et actionnables — pour les humains ou les machines.
