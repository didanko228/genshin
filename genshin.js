const Telegram = require('node-telegram-bot-api');
const bot = new Telegram('1807395086:AAFADp_ClTEj2fBd4Fq3BD_0acLxnMf_63s', { polling: true });
bot.getMe().then(r => console.log(r))

bot.on('text', async (msg) => {
	msg.send = (text, params) => bot.sendMessage(msg.chat.id, text, params);
	let $menu = [];
	var uid = msg.from.id
	var text = msg.text
	let dt = new Date
	console.log("[" + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "] Пользователь " + uid + " отправил: " + text)
	
	if (text == "/start") {
	msg.send(`Привет! Я Паймон! Я могу тебе помочь! Смотри что я могу:

/ar - Расчитать кол-во опыта ранга приключений`, {
		parse_mode: "HTML"
		})
	}
	
	if (text.startsWith('/ar')) {
		let ar = msg.text.split(' ');
		console.log(ar)
		if (!ar[3]) return msg.send(`Пример команды /ar:
		
/ar a b с
где a - сколько сейчас опыта
где b - сколько опыта в день
где с - сколько опыта надо	

Пример:
/ar 5000 1500 15000`)
	a = Number(ar[1])
	b = Number(ar[2])
	c = Number(ar[3])
	d = 0
	console.log(a,b,c)
	if (a >= c) return msg.send(`Вы уже набрали нужное количество опыта!`)
	while(a < c) {
		a = a+b
		d = d+1
		
	}
	console.log(a,b,c)
	if (a >= c) msg.send(`Подсчёт закончен!
	
Потребуется дней: ${d}
У вас будет опыта: ${a}/${c}
Вы в плюсе на: ${a-c}`)
	}	
	
});
