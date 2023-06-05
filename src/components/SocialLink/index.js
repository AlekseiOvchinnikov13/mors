import Image from 'next/image';
import styles from './SocialLink.module.scss';
function SocialLink({ socialArray }) {
  return (
    <nav className={styles.social}>
      <ul className={styles.list}>
        {socialArray && socialArray.map(({image, href, alt}) => (
          <li className={styles.item} key={href}>
            <a className={styles.link} href={href} >
              <Image src={image} alt={alt}/>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialLink;