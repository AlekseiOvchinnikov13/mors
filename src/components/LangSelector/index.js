'use client';
import styles from './LangSelector.module.scss';
import {LANGS_ARRAY} from '@/data/lang';
import {Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {changeLang} from '@/store/langSlice';

const LangSelector = () => {
  const {lang} = useSelector(state => state.langStore);
  const dispatch = useDispatch();
  const selectHandler = value =>
    dispatch(changeLang(value));

  return (
    <Select
      className={styles.selectButton}
      options={LANGS_ARRAY}
      bordered={false}
      showArrow={false}
      value={lang}
      onSelect={value => selectHandler(value)}
    />
  );
};

export default LangSelector;