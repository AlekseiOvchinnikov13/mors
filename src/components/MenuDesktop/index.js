'use client';
import styles from './MenuDesktop.module.scss';
import {MENU_ARRAY} from '@/data/menu';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classNames from 'classnames';
import {colorBrawn80Light, colorWhite70Dark, colorBlue80Light} from '../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';
import {LightThemeName} from '@/data/theme';

const MenuDesktop = () => {
  const {theme} = useSelector(state => state.themeStore);
  const pathname = usePathname();
  // console.log(pathname);


  return (
    <nav className={styles.menuDesktop}>
      <ul>
        {MENU_ARRAY.map(menuItem => {
          const isActive = pathname.startsWith(menuItem.href);
          return (
            <li key={menuItem.label}>
              <Link
                className={classNames(styles.link, isActive && styles.link_active)}
                style={{
                  color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark,
                  borderColor: theme === LightThemeName ? colorBlue80Light : colorWhite70Dark
                }}
                href={menuItem.href}
              >
                {menuItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuDesktop;