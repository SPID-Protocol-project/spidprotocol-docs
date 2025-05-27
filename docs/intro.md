import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="SPID Protocol" description="Smart Packets. Structured Answers. Voice-Ready.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>SPID Protocol</h1>
            <p className="hero__subtitle">Smart Packets. Structured Answers. Voice-Ready.</p>

            <h2>What is SPID?</h2>
            <p>SPID is a resolution and retrieval protocol for AI agents, apps, and users...</p>

            <h2>Why It Matters</h2>
            <p><code>spid://acme/widget123</code> → Instantly retrieves the structured packet</p>

            <h2>Key Components</h2>
            <ul>
              <li><strong>Smart Packet Format</strong></li>
              <li><strong>SPID URIs</strong></li>
              <li><strong>SPID Directory</strong></li>
              <li><strong>PulseIDs</strong></li>
            </ul>

            <h2>Get Involved</h2>
            <p>Email: <a href="mailto:hello@voicemate.id">hello@voicemate.id</a></p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
