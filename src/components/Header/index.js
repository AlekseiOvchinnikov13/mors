'use client';
import Logo from '@/components/Logo';
import styles from './Header.module.scss';
import LangSelector from '@/components/LangSelector';
import ThemeSelector from '@/components/ThemeSelector';
import MenuDesktop from 'src/components/MenuDesktop';
import useDetectMobile from '@/hooks/useDetectMobile';
import MenuMobile from '@/components/MenuMobile';

const Header = () => {
  const {isMobile, isDesktop} = useDetectMobile();

  return (
    <header
      className={styles.header}
    >
      <Logo/>
      <LangSelector/>
      <ThemeSelector/>
      <div/>
      {isDesktop && isDesktop() && <MenuDesktop/>}
      {isMobile && isMobile() && <MenuMobile/>}
    </header>

  );
};

export default Header;