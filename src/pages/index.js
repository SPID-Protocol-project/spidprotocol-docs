import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="SPID Protocol" description="Smart Packets. Structured Answers. Voice-Ready.">
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>SPID Protocol</h1>
          <p className={styles.tagline}>Smart Packets. Structured Answers. Voice-Ready.</p>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>What is SPID?</h2>
          <p>
            SPID is a resolution and retrieval protocol for AI agents, apps, and users to access structured,
            voice-ready content units called Smart Packets — complete with transcripts, metadata, intents, and CTAs.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why It Matters</h2>
          <p>
            SPID replaces guesswork and scraping with resolution. For example:
            <br />
            <code>spid://acme/widget123</code> → instantly retrieves the structured packet.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Key Components</h2>
          <ul>
            <li><strong>Smart Packet Format</strong> — Self-contained, structured answers</li>
            <li><strong>SPID URIs</strong> — Globally unique addresses</li>
            <li><strong>SPID Directory</strong> — Central resolution service</li>
            <li><strong>PulseIDs</strong> — Async inboxes for agents and people</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Get Involved</h2>
          <p>Email us at <a href="mailto:hello@voicemate.id">hello@voicemate.id</a> or visit <a href="https://spid.directory">spid.directory</a>.</p>
        </section>
      </main>
    </Layout>
  );
}
