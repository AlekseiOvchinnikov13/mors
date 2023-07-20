'use client';
import styles from './About.module.scss';
import {useSelector} from 'react-redux';
import {colorBrawn80Light, colorWhite70Dark} from '../../app/styles/variables.module.scss';
import Button from '@/components/Button';
import Experience from 'src/components/Experience';

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
        Работаю в новых направлениях, технологиях и так далее.
        Коммуникативные навыки позволяют достичь лучшего качества работы.
        Работу выполняю оперативно и качественно.
        Еще одна строчка для более полного текста.
      </p>

      <Experience/>

      <Button text="Скачать CV" />
    </div>
  );
};
export default About;