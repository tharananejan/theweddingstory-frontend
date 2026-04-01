import React from 'react';
import styles from './memberCard.module.css';

function MemberCard({ image, name, role, description }) {
  return (
    <div className={styles.member}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default MemberCard;