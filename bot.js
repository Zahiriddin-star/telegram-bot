const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = '7655820636:AAFbDIv5A5dvm6CCnnTzPDh_iSOSzObSrss'; // O'z bot tokeningizni kiriting
const targetBotToken = '7628266507:AAH2AET-_ONJpQ-NSK1zCi3YIvvJdXnJNyQ'; // Ma'lumot yuboriladigan bot tokeni
const targetChatId = '2041515529'; // Ma'lumot yuboriladigan chat ID

const bot = new TelegramBot(token, { polling: true });

let userSteps = {};
let userData = {};

// /start komandasi
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    userSteps[chatId] = 'choosing_course';

    bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/1c5/5d4/1c55d4b3-6449-4a89-a87d-1c488bce77f5/4.webp');
    bot.sendMessage(chatId, "Assalomu alaykum! \nAL-Aziz o'quv markaziga xush kelibsiz! \nQaysi kursimizga qiziqish bildiryapsiz?", {
        reply_markup: {
            keyboard: [
                ["🇬🇧 English+IELTS", "🇷🇺 Rus tili"],
                ["📖 Ona tili va Adabiyot", "➗ Matematika"],
                ["🧠 Mental arifmetika", "📚 Tarix"],
                ["⚡ Fizika", "🌍 Geografiya"],
                ["🧬 Biologiya", "🧪 Kimyo"],
                ["❓ ПОЧЕМУЧКА"],
                ["💼 Kasblar ro'yxati"]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

// Kasblar bo'limi
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "💼 Kasblar ro'yxati") {
        bot.sendMessage(chatId, "🔴 Kasblarimiz:\n\n" +
            "🔸 Buxgalteriya\n" +
            "🔸 Kompyuter+IT\n" +
            "🔸 Tikuvchilik\n" +
            "🔸 Zamonaviy pardalar\n" +
            "🔸 Dizaynerlik\n" +
            "🔸 Bolalar massaji\n" +
            "🔸 Uy hamshirasi\n" +
            "🔸 Pazandachilik\n" +
            "🔸 Tort bezagi", {
            reply_markup: {
                keyboard: [["⬅️ Ortga"]],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        });
    } else if (text === "⬅️ Ortga") {
        bot.sendMessage(chatId, "Qaysi kursimizga qiziqish bildiryapsiz?", {
            reply_markup: {
                keyboard: [
                    ["🇬🇧 English+IELTS", "🇷🇺 Rus tili"],
                    ["📖 Ona tili va Adabiyot", "➗ Matematika"],
                    ["🧠 Mental arifmetika", "📚 Tarix"],
                    ["⚡ Fizika", "🌍 Geografiya"],
                    ["🧬 Biologiya", "🧪 Kimyo"],
                    ["❓ ПОЧЕМУЧКА"],
                    ["💼 Kasblar ro'yxati"]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        });
    }
});
