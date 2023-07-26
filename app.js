import express from "express";
import qr from "qr-image";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path"; // Import the path module
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.post("/", function (req, res) {
  var url = req.body.url;
  if (url == undefined || url == null || url.trim() == "") {
    return res.render("index.ejs");
  }
  let urlPresent = true;
  console.log(url);
  var qr_png = qr.image(url);
  const filename = "newqr_" + Date.now() + ".png"; 
  const qrSource = "public/" + filename;
  const outputStream = fs.createWriteStream(qrSource);
  qr_png.pipe(outputStream);
  outputStream.on("finish", function () {
    const absolutePath = path.resolve(qrSource);
    res.sendFile(absolutePath);
  });
});

app.listen(3000, function () {
  console.log("Server has started at 3000 PORT.");
});

// import express from "express";
// import qr from "qr-image";
// import bodyParser from "body-parser";
// import fs from "fs";
// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.render("index.ejs");
// });

// app.post("/", function (req, res) {
//   var url = req.body.url;
//   if (url == undefined || url == null || url.trim() == "") {
//     return res.render("index.ejs");
//   }
//   let urlPresent = true;
//   console.log(url);
//   var qr_png = qr.image(url);
//   const filename = "newqr_" + Date.now() + ".png"; // Append timestamp to the filename
//   const qrSource = "public/" + filename;
//   const outputStream = fs.createWriteStream(qrSource);
//   qr_png.pipe(outputStream);
//   outputStream.on("finish", function () {
//     // Add a delay of 1000 milliseconds (1 second) before rendering the result page
//     console.log(qrSource)
//     setTimeout(function () {
//       res.render("index.ejs", { urlPresent,qrSource });
//     }, 1000);
//   });
// });

// app.listen(3000, function () {
//   console.log("Server has started at 3000 PORT.");
// });
