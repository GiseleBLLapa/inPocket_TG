const env = require('./.env');
const Telegraf = require('telegraf')
const bot = new Telegraf(env.tokenkey)

bot.start(ctx =>{
  const from = ctx.updatemessage.from
  console.log(from)
  ctx.reply('Seja bem vindo,${from.first_name}!')
})

bot.startPolling()