import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.start((ctx) => {
  ctx.reply(
    "Mini App:",
    Markup.inlineKeyboard([
      [Markup.button.webApp("Ochilish", "https://miniapp-by-alien.netlify.app/")]
    ])
  );
});

bot.on("message", (ctx) => {
  const data = ctx.message.web_app_data?.data;

  if (data) {
    ctx.reply("WebApp dan kelgan data: " + data);
  }
});

bot.launch();
