import {useEffect} from 'react';
import {parseUserAgent} from '@/utils/userAgentParser';

const useDetectMobile = () => {
  useEffect(() => {}, []);
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  return parseUserAgent(userAgent);
};

export default useDetectMobile;