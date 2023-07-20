'use client';
import styles from './About.module.scss';
import {useSelector} from 'react-redux';
import {colorBrawn80Light, colorWhite70Dark} from '../../app/styles/variables.module.scss';
import Button from '@/components/Button';

const About = () => {
  const {theme} = useSelector(state => state.themeStore);
  return(
    <div
      className={styles.about}
    >
      <h2 className={styles.title}>Обо мне</h2>
      <p
        className={styles.text}
        style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
      >
        Обладаю большим опытом в web и desktop разработке, опыт более 8 лет.
        <br/>Работаю в новых направлениях, технологиях и так далее.
        <br/>Коммуникативные навыки позволяют достичь лучшего качества работы.
        <br/>Работу выполняю оперативно и качественно.
        <br/>Еще одна строчка для более полного текста.</p>
      <div className={styles.progress}>
        <div className={styles.progressItem}>
          <p className={styles.quantity}>08+ </p>
          <span
            className={styles.field}
            style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
          >
              Лет <br/>опыта
          </span>
        </div>
        <div className={styles.progressItem}>
          <p className={styles.quantity}>20+ </p>
          <span
            className={styles.field}
            style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
          >
              Сделанных <br/>проектов
          </span>
        </div>
        <div className={styles.progressItem}>
          <p className={styles.quantity}>04+ </p>
          <span
            className={styles.field}
            style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
          >
              Компаний <br/>работал
          </span>
        </div>
      </div>
      <Button text="Скачать CV" />
    </div>
  );
};
export default About;