import axios from 'axios';

const BOT_TOKEN = encodeURIComponent(process.env.NEXT_PUBLIC_BOT_TOKEN);
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?parse_mode=html`;

//const text = `<u><b>#ЗаказанЗвонок</b></u> \n<b>Имя</b>: ${nameValue} \n<b>Телефон</b>: ${phoneValue}`
export const sendMessageToTelegram = async text =>
  await axios.post(
    TELEGRAM_API_URL,
    {
      chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
      text
    },
    axiosConfig
  )
    .then(res => res.ok && res.result)
    .catch(err => alert(`Не удалось отправить сообщение. ${err.message}`));