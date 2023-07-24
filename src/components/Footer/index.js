import styles from './Footer.module.scss';
import SocialNetworks from '@/components/SocialNetworks';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const startYear = 2023;

  return (
    <footer
      className={styles.footer}
    >
      <h2 className={styles.name}>Алексей</h2>
      <p className={styles.profession}>Frontend разработчик</p>
      <SocialNetworks className={styles.socialNetworks} isNoTheme/>
      <p className={styles.copyright}>
        &copy; {startYear}{currentYear > startYear ? ` - ${currentYear}` : ''} Все права защищены
      </p>
      <p className={styles.star}>«Instagram принадлежит компании Meta Platforms Inc., которая запрещена на территории РФ»</p>
    </footer>
  );
};

export default Footer;
