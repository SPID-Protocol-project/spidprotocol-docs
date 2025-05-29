---

id: pulseid
title: PulseID (Français)
description: Découvrez comment PulseIDs alimente l'identité vocale, les boîtes de réception et le routage des Smart Packets dans le protocole SPID.
sidebar\_position: 4
--------------------

# PulseID : Identité vocale pour les humains et les agents

**PulseID** est la couche d'identité du protocole SPID.

C'est un identifiant structuré unique au niveau mondial qui permet aux humains, aux marques et aux agents d'IA d'envoyer et de recevoir des Smart Packets — comme une adresse e-mail, mais pour une communication vocale asynchrone et structurée.

---

## Pourquoi PulseID existe

Les identifiants de communication traditionnels (numéros de téléphone, e-mails, noms d'utilisateur) ont été conçus pour d'anciens systèmes — pas pour les agents d'IA, la voix asynchrone ou le routage intelligent.

**PulseID permet :**

* Boîtes de réception vocales pour les personnes, entreprises et bots
* Résolution des Smart Packets vers l'identité ou le rôle correct
* Livraison fiable avec auditabilité et métadonnées

---

## Format général

Un PulseID suit une structure souple avec espace de nommage :

```
spid:{namespace}:{identifiant}
```

### Exemples :

| PulseID                         | Cas d'utilisation                      |
| ------------------------------- | -------------------------------------- |
| `spid:creator:elena-podcast`    | Boîte vocale d'une podcasteuse         |
| `spid:brand:nike-help`          | Support client IA de Nike              |
| `spid:voiceagent:ai-morty`      | Assistant IA spécialisé en ventes      |
| `spid:biz:acme-insurance-quote` | Point de contact devis pour entreprise |

---

## Fonctionnement des PulseIDs

Chaque PulseID peut être :

* Consulté via le registre SPID
* Résolu vers ses Smart Packets associés
* Routé vers une boîte de réception, un assistant ou un point de terminaison externe

Le protocole SPID prend en charge :

* Résolution via JSON et DNS
* Boîtes de réception authentifiées par jeton (facultatif)
* Logique d'expiration et de délégation (ex : transfert vers agents)

---

## Comment enregistrer un PulseID

1. Visitez le [répertoire PulseID](https://pulseid.app) *(bientôt disponible)*
2. Choisissez un espace de noms (ex : brand, voiceagent, creator)
3. Réclamez et vérifiez votre identifiant
4. Associez vos Smart Packets, votre URL de boîte de réception ou votre assistant

---

## Pour les agents IA

Les agents IA peuvent réclamer un PulseID pour :

* Accepter des requêtes routées
* Recevoir des Smart Packets adaptés au contexte
* Répondre avec des messages vocaux structurés et des mises à jour

Cela permet une **communication multi-agents** et des **transferts vocaux entre bots**.

---

## Confiance et vérification

Les PulseIDs peuvent inclure :

* Métadonnées (organisation, clé publique, description)
* Badges de vérification pour les entités connues
* Historique des packets publiés et mis à jour

Cela rend la messagerie vocale plus **fiable, traçable et intelligente**.

---

> PulseID est votre identité vocale dans un monde propulsé par l'IA — une identité conçue pour les humains, les agents, et tout ce qu’il y a entre les deux.
