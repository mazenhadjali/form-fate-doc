import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <img
            src="/img/icon.png"
            alt="Logo"
            style={{
              maxWidth: 'auto',
              maxHeight: '250px',
              filter: 'grayscale(100%) brightness(0) invert(1)',
            }}
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Form Fate is a powerful and flexible form library for React. It provides a simple and intuitive API for building complex forms with ease based on JSON Schema.">
      <HomepageHeader />
      <main>
        {/* Image powered by Proxym Group */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
          <img
            src="/img/Logo-Proxym-2020-02.png"
            alt="Proxym Group Logo"
            style={{
              maxWidth: '100%',
              maxHeight: '50px',
              marginBottom: '10px',
            }}
          />
          {/* Acknowledgment for the internship program */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 'bold',
              margin: '0 10px',
              lineHeight: '1.5',
            }}>
            This project is part of the end-of-study internship program by <strong>Proxym Group</strong>.
          </p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
