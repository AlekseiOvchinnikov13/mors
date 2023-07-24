'use client';
import PropTypes from 'prop-types';
import styles from './TagSkill.module.scss';
import {
  colorBrawn80Light,
  colorWhite70Dark,
  colorBlue10Light,
  colorBlue20Dark,
  boxShadowTagLight,
  boxShadowTagDark
} from '../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';

const TagSkill = ({size, text}) => {
  const {theme} = useSelector(state => state.themeStore);
  return (
    <div
      className={`${styles.tag} ${size === 'l' ? styles.tagL : styles.tagM}`}
      style={{
        color: theme === 'light' ? colorBrawn80Light : colorWhite70Dark,
        backgroundColor: theme === 'light' ? colorBlue10Light : colorBlue20Dark,
        boxShadow: theme === 'light' ? boxShadowTagLight : boxShadowTagDark
      }}
    >
      {text}
    </div>
  );
};

export default TagSkill;

TagSkill.propTypes = {
  size: PropTypes.oneOf(['m', 'l'])
};
