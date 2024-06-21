const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
//reuire chat.js
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
app.get("/", (req, res) => {
  res.send("Root is working");
});
const port = 8080;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
