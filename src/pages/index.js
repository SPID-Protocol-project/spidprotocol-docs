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

      {/* GitHub Badge Section */}
      <div className="github-badge" style={{ margin: '1rem 2rem' }}>
        <a
          className="github-link"
          href="https://github.com/SPID-Protocol-project/spidprotocol-docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            height="20"
            viewBox="0 0 16 16"
            version="1.1"
            width="20"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.33C4.13 14.91 3.63 13.91 3.63 13.91c-.36-.91-.88-1.15-.88-1.15-.72-.5.06-.49.06-.49.79.06 1.2.82 1.2.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.63-2.8 5.66-5.47 5.96.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          <span className="github-title" style={{ marginLeft: '8px' }}>SPID Protocol</span>
        </a>
        <ul className="github-meta">
          <li>v0.0.1</li>
          <li>⭐ 10</li>
          <li>🍴 2</li>
        </ul>
      </div>

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
