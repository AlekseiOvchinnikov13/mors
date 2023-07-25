import classNames from 'classnames';
import {LightThemeName} from '@/data/theme';
import {colorWhiteLight, colorDarkblueDark} from '../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';
import styles from './ContentWrapper.module.scss';

const ContentWrapper = ({children}) => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <div
      className={classNames('container', styles.content)}
      style={{backgroundColor: theme === LightThemeName ? colorWhiteLight : colorDarkblueDark}}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;