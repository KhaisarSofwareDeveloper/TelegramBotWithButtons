const telegramBot = require('node-telegram-bot-api');

const TOKEN = '6803155643:AAGhoxqRZSGqsdtrKZVhM_Uiqc1XSdtiSjc';
const bot = new telegramBot(TOKEN, {polling: true});

bot.onText(/\/myBot/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Button 1', callback_data: 'btn1' }],
                [{ text: 'Button 2', callback_data: 'btn2' }]
            ]
        }
    };
    bot.sendMessage(chatId, 'Hello from your Telegram Bot : \nChoose an option:', options);
    
});

bot.on('callback_query', async (msg) => {
    const chatId = msg.message.chat.id;
    const button = msg.data;
    if(button === 'btn1'){
      bot.sendMessage(chatId, `Today is : ${new Date}`);
    }
    if(button === 'btn2'){
      bot.sendMessage(chatId, `You clicked on ${button}`);
    }
});
