var mongoose = require("mongoose");
// local -> mongodb://127.0.0.1:27017/mekanbul
var dbURI = "mongodb+srv://ismail32kaya34:l7FbC16KiS2aY42R@mekanbul.jiqmn0n.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);

// Bağlantı Olayları (Connection Events)
mongoose.connection.on("connected", () => {
  console.log(dbURI + " adresine bağlandı!");
});

mongoose.connection.on("error", () => {
  console.log("Bağlantı hatası!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Bağlantı kesildi!");
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  console.log("Bağlantı kapatıldı!");
  process.exit(0);
});

require("./venue")

