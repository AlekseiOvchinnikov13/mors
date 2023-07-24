import styles from './Title.module.scss';

const Title = ({title}) =>
  <h5 className={styles.title}>{title}</h5>;


export default Title;