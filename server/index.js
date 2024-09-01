import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;
const webAppUrl = '/';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const { text } = msg;

  const { first_name, last_name } = msg.from;
  console.log(msg);

  if (text === '/start') {
    await bot.sendMessage(chatId, `Привет ${first_name} ${last_name}!`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Искать', web_app: { url: 'https://ya.ru' } }],
        ],
      },
    });

    return;
  }
  // send a message to the chat acknowledging receipt of their message
  await bot.sendMessage(chatId, 'Received your message', {
    reply_markup: {
      keyboard: [[{ text: 'Заполнить форму' }]],
    },
  });
});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });
