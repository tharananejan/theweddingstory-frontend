import React from 'react';
import styles from './SectionOne.module.css';

function SectionOne() {
  return (
    <section className={styles.story}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.subtitle}>EST. 2024</span>
          <h1 className={styles.title}>Our Story</h1>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;