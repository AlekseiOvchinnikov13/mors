import {SOCIAL_DATA} from '@/data/social';
import SvgImage from 'src/components/SvgImage';
import styles from './SocialNetworks.module.scss';
import {colorWhiteLight} from '../../app/styles/variables.module.scss';

const SocialNetworks = ({className, isNoTheme}) =>
  <ul className={`${styles.socialNetworks} ${className}`}>
    {SOCIAL_DATA.map(({href, alt}) =>
      <li key={alt}>
        <a href={href} target={'_blank'}>
          <SvgImage name={alt} color={isNoTheme ? colorWhiteLight : ''}/>
        </a>
      </li>
    )}
  </ul>;

export default SocialNetworks;