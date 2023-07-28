'use client';
import Title from '@/components/Title';
import styles from './Works.module.scss';
import {WORKS_DATA} from '@/data/works';
import Image from 'next/image';
import {colorWhite90Light, colorWhite70Dark} from '../../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';
import {LightThemeName} from '@/data/theme';

const Works = () => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <div className={`${styles.works} section`}>
      <Title title={'Работы'}/>
      <div className={styles.worksContainer}>
        {WORKS_DATA.map(({src, alt, href}) =>
          <a key={alt} href={href} className={styles.link} target={'_blank'}>
            <div
              className={styles.shadow}
              style={{color: theme === LightThemeName ? colorWhite90Light : colorWhite70Dark}}
            >
              кликни для просмотра
            </div>
            <Image src={src} alt={alt} fill/>
          </a>
        )}
      </div>
    </div>
  );
};

export default Works;