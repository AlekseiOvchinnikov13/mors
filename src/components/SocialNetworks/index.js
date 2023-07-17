import {SOCIAL_DATA} from '@/data/social';
import SocialImage from '@/components/SocialImage';
import styles from './SocialNetworks.module.scss';

const SocialNetworks = ({className}) =>
  <ul className={`${styles.socialNetworks} ${className}`}>
    {SOCIAL_DATA.map(({href, alt}) =>
      <li key={alt}>
        <a href={href} target={'_blank'}>
          <SocialImage name={alt}/>
        </a>
      </li>
    )}
  </ul>;

export default SocialNetworks;