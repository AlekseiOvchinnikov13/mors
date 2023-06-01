'use client';
import styles from './ThemeSelector.module.scss';
import Image from 'next/image';
import {useDispatch, useSelector} from 'react-redux';
import darkTheme from '../../../public/assets/images/theme/dark-theme.svg';
import lightTheme from '../../../public/assets/images/theme/light-theme.svg';
import {changeTheme} from '@/store/themeSlice';

const ThemeSelector = () => {
  const {theme} = useSelector(state => state.themeStore);
  const dispatch = useDispatch();

  //TODO исправить querySelector
  const themeHandler = () => {
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
    document.querySelector('body').classList.toggle('dark');
  };

  return (
    <button
      className={styles.buttonTheme}
      onClick={themeHandler}
    >
      <Image src={theme === 'light' ? darkTheme : lightTheme} alt={''} fill={true}/>
    </button>
  );
};

export default ThemeSelector;