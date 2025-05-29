import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'Protocole SPID' })}
      description={translate({
        id: 'homepage.subtitle',
        message: 'Smart Packets. Réponses structurées. Prêtes pour la voix.',
      })}
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">
            <Translate id="homepage.title">Protocole SPID</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate id="homepage.subtitle">
              Smart Packets. Réponses structurées. Prêtes pour la voix.
            </Translate>
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              <Translate id="homepage.getStarted">Commencer</Translate>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2><Translate id="homepage.whatIs">Qu'est-ce que SPID ?</Translate></h2>
                <p>
                  <Translate id="homepage.whatIs.desc">
                    SPID est un protocole de résolution et de récupération permettant aux agents IA, applications et utilisateurs
                    d’accéder à des unités de contenu structurées et prêtes pour la voix, appelées Smart Packets — avec transcription,
                    métadonnées, intentions et appels à l’action.
                  </Translate>
                </p>
              </div>
              <div className="col col--6">
                <h2><Translate id="homepage.why">Pourquoi c’est important</Translate></h2>
                <p>
                  <Translate id="homepage.why.desc">
                    SPID remplace les suppositions et le scraping par une résolution directe. Par exemple :
                  </Translate>
                  <br />
                  <code>spid://acme/widget123</code>
                </p>
              </div>
            </div>

            <div className="row" style={{ marginTop: '2rem' }}>
              <div className="col col--12">
                <h2><Translate id="homepage.key">Composants clés</Translate></h2>
                <ul>
                  <li><strong><Translate id="homepage.key.1">Format Smart Packet — Réponses structurées et autonomes</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.2">URI SPID — Adresses globalement uniques</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.3">Annuaire SPID — Service central de résolution</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.4">PulseIDs — Boîtes de réception asynchrones pour agents et humains</Translate></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
