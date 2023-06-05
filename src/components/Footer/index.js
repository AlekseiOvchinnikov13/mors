'use client';
import styles from './Footer.module.scss';
import useDetectMobile from '@/hooks/useDetectMobile';
import SocialLink from '@/components/SocialLink';
import {SOCIAL_ARRAY} from '@/data/social';
import Copyright from '@/components/CurrentYear';
const Footer = () => {
  const {isMobile, isDesktop} = useDetectMobile(); //заготовка, использую когда будет макет мобилки

  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer_title} id="contacts">Алексей</h2>
      <h3 className={styles.footer_subtitle}>Frontend разработчик</h3>
      <SocialLink className={styles.footer_social} socialArray={SOCIAL_ARRAY} />
      <p className={styles.copyright}><Copyright /></p>
    </footer>
  );
};

export default Footer;