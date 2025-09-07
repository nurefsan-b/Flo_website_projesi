const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Burada tekrar website demene gerek yok, çünkü server.js zaten website içinde
app.use(express.static(__dirname));

// Anasayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// İletişim formunu yakalamak için gerekli
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("Yeni mesaj geldi:");
  console.log("Ad:", name);
  console.log("Email:", email);
  console.log("Telefon:", phone);
  console.log("Mesaj:", message);

  res.send("Mesajınız başarıyla alındı!");
});

app.listen(PORT, () => {
  console.log(`✅ Server http://localhost:${PORT} adresinde çalışıyor`);
});
