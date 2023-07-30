'use client';
import styles from './Contact.module.scss';
import Title from '@/components/Title';
import Button from '@/components/Button';
import {sendMessageToTelegram} from '@/app/api';
import {useCallback, useState} from 'react';
import {INPUTS_DATA} from '@/data/inputs';
import {colorBrawn80Light, colorWhite70Dark} from '../../../app/styles/variables.module.scss';
import {useSelector} from 'react-redux';
import {LightThemeName} from '@/data/theme';
import {notification} from 'antd';

const Contact = () => {
  const {theme} = useSelector(state => state.themeStore);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (type, title, description) => {
    api[type]({
      message: title,
      description: description,
      placement: 'top',
    });
  };

  const [formValues, setFormValues] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleInputChange = useCallback((e) => {
    const {name, value} = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const sendHandler = () => {
    if (formValues.name === '') {
      openNotification('error', 'Ошибка!', 'Поле "Имя" не может быть пустым.');
      return;
    }

    if (formValues.contact === '') {
      openNotification('error', 'Ошибка!', 'Поле "Telegram" не может быть пустым.');
      return;
    }

    const text = `<u><b>#Mors</b></u>\n<b>Имя</b>: ${formValues.name}\n<b>Контакт</b>: ${formValues.contact}\n<b>Сообщение</b>: ${formValues.message}`;

    sendMessageToTelegram(text).then(() => {
      openNotification('success', 'Успех!', 'Ваши данные отправлены.');
      setFormValues({name: '', contact: '', message: ''});
    });
  };


  return (
    <div className={`${styles.contact} section`}>
      {contextHolder}
      <Title title={'Связь со мной'}/>
      <p
        className={styles.subtitle}
        style={{color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark}}
      >
          С удовольствием отвечу на любые ваши вопросы
      </p>
      <div className={styles.inputsContainer}>
        {INPUTS_DATA.map(({id, label, isRequired}) =>
          <input
            key={id}
            name={id}
            placeholder={label}
            required={isRequired}
            className={`${styles.input} ${theme !== LightThemeName ? styles.inputDark : ''}`}
            value={formValues[id]}
            onChange={handleInputChange}
            type={'text'}
            style={{
              borderColor: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark,
              color: theme === LightThemeName ? colorBrawn80Light : colorWhite70Dark
            }}
          />
        )}
      </div>
      <Button text={'Отправить'} onClick={sendHandler} className={styles.button}/>
    </div>
  );
}
;

export default Contact;