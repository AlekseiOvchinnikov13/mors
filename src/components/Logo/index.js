'use client';
import Link from 'next/link';
import Image from 'next/image';
import LogoLight from '../../../public/assets/images/logo/logo-light.svg';
import LogoDark from '../../../public/assets/images/logo/logo-dark.svg';
import styles from './Logo.module.scss';
import {useSelector} from 'react-redux';
import {LightThemeName} from '@/data/theme';

const Logo = () => {
  const {theme} = useSelector(state => state.themeStore);
  const srcLogo = theme === LightThemeName ? LogoLight : LogoDark;

  return (
    <Link href="/" className={styles.linkLogo}>
      <Image
        src={srcLogo}
        alt="logo"
        fill={true}
      />
    </Link>
  );
};

export default Logo;