import React from 'react';
import styles from './SectionTwo.module.css';

function SectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.container}>

        <div className={styles.left}>
          <img className={styles.SectionTwoImage} 
          src="https://i.pinimg.com/1200x/0b/99/2e/0b992ebda73d6e2adf5bfea6347c7269.jpg" 
          alt="wedding dress" 
          />
        </div>

        <div className={styles.right}>
          <h2 className={styles.rightTitle}>
            Capturing the <span className={styles.soul}>Soul</span> of the Moment
          </h2>
          <div className={styles.description}>
            <p>
              At The Wedding Story, we believe that the most profound memories aren't just seen; they are felt. 
              Our philosophy is rooted in the art of the unseen the fleeting, soulful instances that define 
              the essence of your celebration.
            </p>
            <p>
              We’ve moved beyond traditional documentation. By blending editorial precision with cinematic 
              intimacy, we curate a digital tapestry that mirrors the authentic heartbeat of your wedding day.
            </p>
            <p>
              Our commitment is to your legacy. We don't just create content; we archive emotions in their 
              purest, most high-fashion form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;