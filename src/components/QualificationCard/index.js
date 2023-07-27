'use client';
import styles from './QualificationCard.module.scss';
import {useSelector} from 'react-redux';
import {
  colorBrawn80Light,
  colorWhite70Dark,
  colorBrawn50Light,
  colorWhite60Dark
} from '../../app/styles/variables.module.scss';
import {LightThemeName} from '@/data/theme';

const QualificationCard = ({data: {cardTitle, text, period}}) => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <div
      className={styles.qualificationCardWrapper}
      style={{borderColor: theme === LightThemeName ? colorBrawn50Light : colorWhite60Dark}}
    >
      <h6
        className={styles.title}
        style={{color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark}}
      >
        {cardTitle}
      </h6>
      <p
        className={styles.text}
        style={{color: theme === LightThemeName ? colorBrawn50Light : colorWhite60Dark}}
      >
        {text}
      </p>
      <p
        className={`${styles.text} ${styles.textRight}`}
        style={{color: theme === LightThemeName ? colorBrawn50Light : colorWhite60Dark}}
      >
        {period}
      </p>
    </div>
  );
};

export default QualificationCard;