import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'SPID Protocol' })}
      description={translate({
        id: 'homepage.subtitle',
        message: 'Smart Packets. Structured Answers. Voice-Ready.',
      })}
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">
            <Translate id="homepage.title">SPID Protocol</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate id="homepage.subtitle">
              Smart Packets. Structured Answers. Voice-Ready.
            </Translate>
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              <Translate id="homepage.getStarted">Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2><Translate id="homepage.whatIs">What is SPID?</Translate></h2>
                <p>
                  <Translate id="homepage.whatIs.desc">
                    SPID is a resolution and retrieval protocol for AI agents, apps, and users to access structured,
                    voice-ready content units called Smart Packets — complete with transcripts, metadata, intents, and CTAs.
                  </Translate>
                </p>
              </div>
              <div className="col col--6">
                <h2><Translate id="homepage.why">Why It Matters</Translate></h2>
                <p>
                  <Translate id="homepage.why.desc">
                    SPID replaces guesswork and scraping with resolution. For example:
                  </Translate>
                  <br />
                  <code>spid://acme/widget123</code>
                </p>
              </div>
            </div>

            <div className="row" style={{ marginTop: '2rem' }}>
              <div className="col col--12">
                <h2><Translate id="homepage.key">Key Components</Translate></h2>
                <ul>
                  <li><strong><Translate id="homepage.key.1">Smart Packet Format — Self-contained, structured answers</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.2">SPID URIs — Globally unique addresses</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.3">SPID Directory — Central resolution service</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.4">PulseIDs — Async inboxes for agents and people</Translate></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
