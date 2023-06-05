'use client';
import {useEffect, useState} from 'react';

function Copyright() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const startYear = 2023;
  const copyright =
    currentYear > startYear
      ? `©️ ${startYear}-${currentYear} Все права защищены`
      : `©️ ${startYear} Все права защищены`;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return <span>{copyright}</span>;
}

export default Copyright;