var Discord = require('discord.io');
var logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.DISCORD_TOKEN,
   autorun: true
});

bot.on("ready", function (evt) {
    logger.info("Connected");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

//主要修改的部分
var ran = Math.floor(Math.random()*100)+1;//亂數產生1~100
        switch(cmd) {
            case 'dice'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: user + ' 骰出了 ' + ran + ' 點！'//機器人回覆這一行字
                });
            break;
			case 'Insight'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/a/Iwoy68n'
                });
            break;
			case '眼光'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/a/Iwoy68n'
                });
            break;
			case 'Spirit'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/a/P1CHmrH https://imgur.com/a/n8hgArc'
                });
            break;
			case '精神'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/a/P1CHmrH https://imgur.com/a/n8hgArc'
                });
            break;
			case '是在哈囉'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: '@小龍湯湯包 是在哈囉!?'
                });
            break;
			case '柳G'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: '不是柳G 請正名"廢物"好嗎?'
                });
            break;
			case '紅心'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: '不是紅心 請正名"廢物"好嗎?'
                });
            break;
         }

     }
});
