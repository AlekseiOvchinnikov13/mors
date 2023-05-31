import './styles/globals.scss';
import {Montserrat} from 'next/font/google';
import Header from '@/components/Header';

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
        <Header/>
        {children}
      </body>
    </html>
  );
}
