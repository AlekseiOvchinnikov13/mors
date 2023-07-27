'use client';
import SocialNetworks from '@/components/SocialNetworks';
import styles from './FirstScreen.module.scss';
import Image from 'next/image';
import MyPhoto from '../../../../public/assets/images/myPhoto.jpg';
import {useSelector} from 'react-redux';
import {colorBrawn80Light, colorWhite70Dark} from '../../../app/styles/variables.module.scss';
import useDetectMobile from '@/hooks/useDetectMobile';
import {LightThemeName} from '@/data/theme';

const FirstScreen = () => {
  const {theme} = useSelector(state => state.themeStore);
  const {isMobile, isDesktop} = useDetectMobile();

  return (
    <div className={styles.commonWrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Привет, я Алексей</h1>
        <h2
          className={styles.profession}
          style={{color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark}}
        >
          Frontend разработчик
        </h2>
        <p
          className={styles.description}
          style={{color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark}}
        >
          Разрабатываю сложные штуки-дрюки, делаю это быстро и качественно
        </p>
        {isMobile && isMobile() && <Image src={MyPhoto} alt={'My photo'} className={styles.photo}/>}
        <SocialNetworks className={styles.socialLinks}/>
      </div>
      {isDesktop && isDesktop() && <Image src={MyPhoto} alt={'My photo'} className={styles.photo}/>}
    </div>
  );
};

export default FirstScreen;