'use client';
import styles from './ScopeQualification.module.scss';
import SvgImage from '@/components/SvgImage';
import QualificationCard from '@/components/QualificationCard';
import {useSelector} from 'react-redux';
import {LightThemeName} from '@/data/theme';
import {colorBrawn80Light, colorWhite70Dark} from '../../app/styles/variables.module.scss';

const ScopeQualification = ({title,iconName,dataCard}) => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <div className={styles.scopeQualification}>
      <h6
        className={styles.title}
        style={{color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark}}
      >
        <SvgImage name={iconName}/>
        {title}
      </h6>
      <div className={styles.qualificationCard}>
        {dataCard.map((data) =>
          <QualificationCard key={data.cardTitle} data={data}/>
        )}
      </div>
    </div>
  );
};

export default ScopeQualification;