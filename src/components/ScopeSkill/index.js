'use client';
import styles from './ScopeSkill.module.scss';
import TagSkill from '@/components/TagSkill';
import {colorBrawn80Light, colorWhite70Dark} from '../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';

const ScopeSkill = ({data: {title, skills}}) => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <div className={styles.scopeSkill}>
      <h6
        className={styles.title}
        style={{color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark}}
      >
        {title}
      </h6>
      <div className={styles.tagsWrapper}>
        {skills.map(({label, size}) =>
          <TagSkill size={size} text={label} key={label}/>
        )}
      </div>
    </div>
  );
};

export default ScopeSkill;