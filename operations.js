function sum(ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber + secondNumber;
    ctx.reply(`Your sum is ${result}`)
}

function sub(ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber - secondNumber;
    ctx.reply(`Your sub is ${result}`)
}

function mult(ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber * secondNumber;
    ctx.reply(`Your mult is ${result}`)
}

function div(ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber / secondNumber;
    ctx.reply(`Your div is ${result}`)
}

function evenOrOdd(ctx) {
    const arr = ctx.message.text.split(' ');
    const variable = Number(arr[1]);
    if (variable % 2 === 0) ctx.reply(`${variable} is Even`);
    else ctx.reply(`${variable} is Odd`)
}

module.exports = {sum, div, mult, sub, evenOrOdd}