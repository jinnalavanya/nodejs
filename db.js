let mongoose = require("mongoose");
let con = mongoose.connect(
  "mongodb+srv://jinnalavanya100:U5QrUUDDmavF539Z@nodejuly24.jo5lusd.mongodb.net/?retryWrites=true&w=majority&appName=nodejuly24"
);

if (con) {
  console.log("connected");
} else {
  console.log("not connected");
}
