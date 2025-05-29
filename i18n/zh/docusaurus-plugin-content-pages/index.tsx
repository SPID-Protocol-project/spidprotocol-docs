import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'SPID 协议' })}
      description={translate({
        id: 'homepage.subtitle',
        message: '智能数据包。结构化答案。语音就绪。',
      })}
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">
            <Translate id="homepage.title">SPID 协议</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate id="homepage.subtitle">
              智能数据包。结构化答案。语音就绪。
            </Translate>
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              <Translate id="homepage.getStarted">立即开始</Translate>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2><Translate id="homepage.whatIs">什么是 SPID？</Translate></h2>
                <p>
                  <Translate id="homepage.whatIs.desc">
                    SPID 是一个解析和检索协议，使 AI 助手、应用程序和用户能够访问结构化的语音就绪内容单元，称为智能数据包（Smart Packets）— 包含转录文本、元数据、意图和行动按钮。
                  </Translate>
                </p>
              </div>
              <div className="col col--6">
                <h2><Translate id="homepage.why">为什么重要？</Translate></h2>
                <p>
                  <Translate id="homepage.why.desc">
                    SPID 通过解析代替猜测和抓取。例如：
                  </Translate>
                  <br />
                  <code>spid://acme/widget123</code>
                </p>
              </div>
            </div>

            <div className="row" style={{ marginTop: '2rem' }}>
              <div className="col col--12">
                <h2><Translate id="homepage.key">关键组成部分</Translate></h2>
                <ul>
                  <li><strong><Translate id="homepage.key.1">智能数据包格式 — 自包含的结构化答案</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.2">SPID URI — 全局唯一地址</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.3">SPID 目录 — 中央解析服务</Translate></strong></li>
                  <li><strong><Translate id="homepage.key.4">PulseID — 为代理和人类设计的异步收件箱</Translate></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
