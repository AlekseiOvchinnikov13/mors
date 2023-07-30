import styles from './Button.module.scss';

const Button = ({text, onClick, className}) =>
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    {text}
  </button>;

export default Button;