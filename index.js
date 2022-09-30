require('dotenv').config();
console.log(process.env);
const { Telegraf } = require('telegraf');
const {sum, sub, div, mult, evenOrOdd} = require('./operations')
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});



const bot = new Telegraf(process.env.BOT_TOKEN);


bot.start((ctx) => ctx.reply('HI! How Are You?'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.hears('hi', (ctx) => ctx.reply('Hi there!'));
bot.hears('hello', (ctx) => ctx.reply('Hello!!!'));
bot.on('text', (ctx) => {

    const user = {
        id: ctx.update.message.from.id,
        name: ctx.update.message.from.first_name,
        lastName: ctx.update.message.from.last_name
    };


    if (ctx.message.text.startsWith('even?')) evenOrOdd(ctx);
    if (ctx.message.text.startsWith('sum')) sum(ctx);
    if (ctx.message.text.startsWith('sub')) sub(ctx);
    if (ctx.message.text.startsWith('mult')) mult(ctx);
    if (ctx.message.text.startsWith('div')) div(ctx);
        else console.log(user)

});



bot.launch().then(console.log('Bot started'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));