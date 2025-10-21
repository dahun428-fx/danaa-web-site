
import React from 'react';
import styles from './Banner.module.css';

interface BannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, backgroundImage }) => {
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section className={styles.banner} style={bannerStyle}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
};

export default Banner;
