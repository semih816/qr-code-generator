const QRCode = require("qrcode");

const text = "deneme yazısı"; // QR koduna dönüştürülecek metin

QRCode.toFile("qrcode.png", text, { width: 300 }, (err) => {
  if (err) console.error(err);
  console.log("QR kod oluşturuldu: qrcode.png");
});
