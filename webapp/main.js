const tg = window.Telegram.WebApp;

// ekranni ochish
tg.expand();

// Telegram mos ranglar
document.body.style.backgroundColor = tg.themeParams.bg_color;
document.body.style.color = tg.themeParams.text_color;

document.getElementById("title").innerText = "Telegram Mini App";
document.getElementById("info").innerText =
  "Salom, " + (tg.initDataUnsafe?.user?.first_name || "mehmon");

// MAIN button
tg.MainButton.setText("Tasdiqlash");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.sendData("Tasdiqlandi!");
  document.body.style.color = "red";
});

// Back button
tg.BackButton.show();

tg.BackButton.onClick(() => {
  tg.close();
});
