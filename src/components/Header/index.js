'use client';
import Logo from '@/components/Logo';
import styles from './Header.module.scss';
import LangSelector from '@/components/LangSelector';
import ThemeSelector from '@/components/ThemeSelector';
// import {useSelector} from 'react-redux';
// import {colorWhiteLight, colorDarkblueDark} from '../../app/styles/variables.module.scss';
const Header = () => {
  // const {theme} = useSelector(state => state.themeStore);

  return (
    <header
      className={styles.header}
      // style={{backgroundColor: theme === 'light' ? colorWhiteLight : colorDarkblueDark}}
    >
      <Logo/>
      <LangSelector/>
      <ThemeSelector/>
    </header>

  );
};

export default Header;