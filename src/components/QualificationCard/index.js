import styles from './QualificationCard.module.scss';
import {useSelector} from 'react-redux';
import {
  colorBrawn80Light,
  colorWhite70Dark,
  colorBrawn50Light,
  colorWhite60Dark
} from '../../app/styles/variables.module.scss';

const QualificationCard = () => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <div
      className={styles.qualificationCardWrapper}
      style={{borderColor: theme === 'light' ? colorBrawn50Light : colorWhite60Dark}}
    >
      <h6
        className={styles.title}
        style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
      >

      </h6>
      <p
        className={styles.text}
        style={{color: theme === 'light' ? colorBrawn50Light : colorWhite60Dark}}
      >

      </p>
      <p
        className={`${styles.text} ${styles.textRight}`}
        style={{color: theme === 'light' ? colorBrawn50Light : colorWhite60Dark}}
      >

      </p>
    </div>
  );
};

export default QualificationCard;