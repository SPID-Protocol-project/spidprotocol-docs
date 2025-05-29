import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import { useTranslation } from '@docusaurus/core';

export default function Home() {
  const { translate } = useTranslation();

  return (
    <Layout
      title={translate({ message: 'SPID Protocol' })}
      description={translate({ message: 'Smart Packets. Structured Answers. Voice-Ready.' })}
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">
            {translate({ message: 'SPID Protocol' })}
          </h1>
          <p className="hero__subtitle">
            {translate({ message: 'Smart Packets. Structured Answers. Voice-Ready.' })}
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              {translate({ message: 'Get Started' })}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>{translate({ message: 'What is SPID?' })}</h2>
                <p>
                  {translate({ message: 'SPID is a resolution and retrieval protocol for AI agents, apps, and users to access structured, voice-ready content units called Smart Packets — complete with transcripts, metadata, intents, and CTAs.' })}
                </p>
              </div>
              <div className="col col--6">
                <h2>{translate({ message: 'Why It Matters' })}</h2>
                <p>
                  {translate({ message: 'SPID replaces guesswork and scraping with resolution. For example:' })}
                  <br />
                  <code>spid://acme/widget123</code> → {translate({ message: 'instantly retrieves the structured packet.' })}
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: '2rem' }}>
              <div className="col col--12">
                <h2>{translate({ message: 'Key Components' })}</h2>
                <ul>
                  <li><strong>{translate({ message: 'Smart Packet Format' })}</strong> — {translate({ message: 'Self-contained, structured answers' })}</li>
                  <li><strong>{translate({ message: 'SPID URIs' })}</strong> — {translate({ message: 'Globally unique addresses' })}</li>
                  <li><strong>{translate({ message: 'SPID Directory' })}</strong> — {translate({ message: 'Central resolution service' })}</li>
                  <li><strong>{translate({ message: 'PulseIDs' })}</strong> — {translate({ message: 'Async inboxes for agents and people' })}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
