const { error } = require('console')
const { Telegraf, Markup } = require('telegraf')  //деструктизация
const { commands } = require('./constants')
require('dotenv').config()

const text = require('./constants')

const bot = new Telegraf(process.env.BOT_TOKEN)
console.log(bot)

bot.start(ctx =>  ctx.reply(`Привет ${ctx.message.from.username ? ctx.message.from.username : 'Гость...'}`))

bot.help(ctx => ctx.reply(text.commands))

//пишем обработчика
bot.command('course', async ctx => {
	try{
			await ctx.replyWithHTML(
		'<b>Наши Курсы</b>',
	 Markup.inlineKeyboard([
		[Markup.button.callback('UX/UI 💀', 'btn_ux') ,
		Markup.button.callback('JS 💩' , 'btn_js'),
		Markup.button.callback('API 💩' , 'btn_api')],
		[Markup.button.callback('FRONTEND 👻', 'btn_fr')]   //''  '' ''
	]))

	}catch (e){
		console.error(e)
	}

})

//Обработчик


// const handlerAction = (btnName, Photo, txt) => {
// 		bot.action(btnName, async ctx => {
// 	try {
// 		//Убирает тайминг с кнопки
// 		await ctx.answerCbQuery()
// 		if ( photo ){
// 			await ctx.replyWithPhoto({
// 				source: photo,})
// 		}
// 		await ctx.replyWithHTML(txt)
// 		}catch (e) {
// 		console.error(e)

// 	}

// })
// }
// handlerAction('btn_ux', false , text.myTxt1)
// handlerAction('btn_js', false , text.myTxt2)
// handlerAction('btn_api', false, text.myTxt3)
// handlerAction('btn_fr', false, text.myTxt4)

const handlerAction = (btnName, photo, txt) => {
  bot.action(btnName, async ctx => {
    try {
      //Убирает тайминг с кнопки
      await ctx.answerCbQuery()
      if (photo !== false) {
        await ctx.replyWithPhoto({
          source: photo,
        })
      }
      await ctx.replyWithHTML(txt)
    } catch (e) {
      console.log(e)
    }
  })
}

handlerAction('btn_ux', './img/Itachi.jpg', text.myTxt1)
handlerAction('btn_js', './img/pain.jpg', text.myTxt2)
handlerAction('btn_api', './img/saske.jpg', text.myTxt3)
handlerAction('btn_fr', './img/pain.jpg', text.myTxt4)





//Start
bot.launch()