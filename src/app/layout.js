'use client';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import './styles/globals.scss';
import {Montserrat} from 'next/font/google';
import Header from '@/components/Header';
import classNames from 'classnames';

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Mors',
  description: 'Aleksei Ovchinnikov Frontend developer',
  applicationName: 'Mors',
  themeColor: '#fff'
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={classNames(montserrat.className, 'container')}>
        <Provider store={store}>
          <Header/>
          <main>{children}</main>

        </Provider>
      </body>
    </html>
  );
}
