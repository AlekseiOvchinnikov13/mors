import classNames from 'classnames';
import {LightThemeName} from '@/data/theme';
import {colorWhiteLight, colorDarkblueDark} from '../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';
import styles from './contentWrapper.module.scss';

const ContentWrapper = ({children}) => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <section
      className={classNames('container', styles.content)}
      style={{backgroundColor: theme === LightThemeName ? colorWhiteLight : colorDarkblueDark}}
    >
      {children}
    </section>
  );
};

export default ContentWrapper;