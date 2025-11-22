import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

// start komandasi webview tugmasi bilan
bot.start((ctx) => {
  return ctx.reply(
    "Mini App ga xush kelibsiz!",
    Markup.inlineKeyboard([
      Markup.button.webApp("Mini App ni ochish", "https://xalilov.uz/")
    ])
  );
});

bot.launch();
console.log("Bot ishga tushdi...");
