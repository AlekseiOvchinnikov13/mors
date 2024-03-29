'use client';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import './styles/globals.scss';
import {Montserrat} from 'next/font/google';
import Header from '@/components/Header';
import ContentWrapper from 'src/components/ContentWrapper';
import Footer from '@/components/Footer';


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
      <body className={montserrat.className}>
        <Provider store={store}>
          <ContentWrapper>
            <Header/>
            <main>{children}</main>
          </ContentWrapper>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
