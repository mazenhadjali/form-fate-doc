import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Schema-Driven Forms',
    image: require('@site/static/img/schema.png').default,
    description: (
      <>
        FormFate lets you define entire forms using a structured JSON schema, making them reusable, scalable, and easy to update.
      </>
    ),
  },
  {
    title: 'Dynamic Logic & Reactivity',
    image: require('@site/static/img/dynamic.png').default,
    description: (
      <>
        Support for conditional rendering, async option loading, and value callbacks enables fully reactive form behavior out of the box.
      </>
    ),
  },
  {
    title: 'Customizable Components',
    image: require('@site/static/img/custom.png').default,
    description: (
      <>
        Easily plug in your own React components for custom field types, ensuring your forms look and behave exactly as needed.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureimage} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
