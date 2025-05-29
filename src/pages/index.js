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
          <p className="hero__subtitle">
            Smart Packets. Structured Answers. Voice-Ready.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>What is SPID?</h2>
                <p>
                  SPID is a resolution and retrieval protocol for AI agents, apps, and users to access structured,
                  voice-ready content units called Smart Packets — complete with transcripts, metadata, intents, and CTAs.
                </p>
              </div>
              <div className="col col--6">
                <h2>Why It Matters</h2>
                <p>
                  SPID replaces guesswork and scraping with resolution. For example:
                  <br />
                  <code>spid://acme/widget123</code> → instantly retrieves the structured packet.
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: '2rem' }}>
              <div className="col col--12">
                <h2>Key Components</h2>
                <ul>
                  <li><strong>Smart Packet Format</strong> — Self-contained, structured answers</li>
                  <li><strong>SPID URIs</strong> — Globally unique addresses</li>
                  <li><strong>SPID Directory</strong> — Central resolution service</li>
                  <li><strong>PulseIDs</strong> — Async inboxes for agents and people</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
