import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="SPID Protocol"
      description="Smart Packets. Structured Answers. Voice-Ready."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">SPID Protocol</h1>
          <p className="hero__subtitle">Smart Packets. Structured Answers. Voice-Ready.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <div className="container">
            <h2>The Identity Layer for Smart AI Communication</h2>
            <p>
              SPID is a resolution and retrieval protocol for AI assistants, agents, and applications to access
              self-contained, voice-ready content units — Smart Packets — complete with transcripts, metadata, intents,
              and CTAs. It's the future of how AI communicates.
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>The Problem</h2>
            <p>
              AI is everywhere — answering questions, booking appointments, routing support. But today’s internet is a maze
              of unstructured data, outdated web pages, and scraped content. The result? Confused answers, hallucinations,
              and missed intent.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>The Solution: SPID</h2>
            <p>
              SPID replaces guesswork with a structured protocol for delivering real answers. With SPID, content is:
            </p>
            <ul>
              <li><strong>Structured</strong> — Not just a blob of HTML, but voice-ready, AI-readable packets</li>
              <li><strong>Intent-aware</strong> — Clear user goals attached to every message</li>
              <li><strong>Routable</strong> — Each packet has a globally unique <code>spid://</code> URI</li>
              <li><strong>Voice-ready</strong> — Instant playback with transcript and call-to-action logic</li>
              <li><strong>Agent-friendly</strong> — Perfect for AI assistants that need to respond intelligently</li>
            </ul>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>How It Works</h2>
            <ul>
              <li><strong>Smart Packet Format</strong> – Modular packets with voice, text, metadata, and CTAs</li>
              <li><strong>SPID URIs</strong> – Globally unique IDs like <code>spid://acme/warranty-lookup</code></li>
              <li><strong>PulseIDs</strong> – Async inboxes for agents and people (e.g., <code>spid://rick/pulse</code>)</li>
              <li><strong>SPID Directory</strong> – Public resolution service where agents fetch the correct packet</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>Real-World Use Cases</h2>
            <ul>
              <li><strong>Customer Service AI</strong> — Instantly delivers the right answer, not a guess</li>
              <li><strong>Sales Funnels</strong> — Voice messages + CTAs drive engagement and conversion</li>
              <li><strong>Personal Voice Inbox</strong> — Leave voice messages with intent and reply logic</li>
              <li><strong>Healthcare, Legal, Education</strong> — Structured packets replace legacy forms</li>
            </ul>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>Why It Matters</h2>
            <p>
              SPID isn’t just a protocol. It’s the foundation of a new layer of the internet — one designed for AI agents,
              voice-first experiences, and structured retrieval.
            </p>
            <p>
              It’s like DNS for answers.  
              <br />
              Like SMTP for structured replies.  
              <br />
              Like the missing link between humans and AI.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>Get Involved</h2>
            <ul>
              <li><Link to="/docs/intro">Read the Docs</Link> – Learn how SPID works under the hood</li>
              <li><Link to="/docs/start-building">Build with Smart Packets</Link> – Use SPID in your apps</li>
              <li><Link to="/docs/community">Join the Community</Link> – Help shape the future of structured AI communication</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
