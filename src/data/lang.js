import rusLogo from '../../public/assets/images/langs/russia.png';
import usaLogo from '../../public/assets/images/langs/usa.png';
import Image from 'next/image';

export const LANGS_ARRAY = [
  {
    value: 'русский',
    label: <Image src={rusLogo} alt={'русский'} fill={true} />,
    className: 'option'
  },
  {
    value: 'english',
    label: <Image src={usaLogo} alt={'english'} fill={true}  />,
    className: 'option'
  }
];

//FIXME исправить загрузку без initialImage
export const initialLang = {
  value: 'русский',
  label: <Image src={rusLogo} alt={'русский'} width={28}/>,
  className: 'option'
};