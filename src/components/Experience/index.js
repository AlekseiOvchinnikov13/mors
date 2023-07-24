import styles from '@/components/Experience/Experience.module.scss';
import {EXPERIENCE_DATA} from '@/data/experience';
import {colorBrawn80Light, colorWhite70Dark} from '../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';

const Experience = () => {
  const {theme} = useSelector(state => state.themeStore);
  return (
    <div className={styles.experience}>
      {EXPERIENCE_DATA.map(({number, text}) => (
        <div className={styles.experienceItem} key={text}>
          <p className={styles.quantity}>{number}</p>
          <p
            className={styles.field}
            style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
            dangerouslySetInnerHTML={{
              __html: text
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Experience;



