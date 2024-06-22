// initialise Database.
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// inserting Data to DB.

let chats = [
  {
    from: "shiv",
    to: "priya",
    msg: "send me your resume",
    created_at: new Date(),
  },
  {
    from: "Raj",
    to: "Deep",
    msg: "Hii How are you",
    created_at: new Date(),
  },
  {
    from: "Nik",
    to: "nikeeta",
    msg: "Can i call you ?",
    created_at: new Date(),
  },
  {
    from: "Ayush",
    to: "supriya",
    msg: "heyyy! whats upp..",
    created_at: new Date(),
  },
  {
    from: "shivraj",
    to: "priya",
    msg: "send me your photos",
    created_at: new Date(),
  },
  {
    from: "kumar",
    to: "anurag",
    msg: "send me your resume and mine too",
    created_at: new Date(),
  },
];

Chat.insertMany(chats)
  .then((res) => {
    console.log("sucessful");
  })
  .catch((err) => {
    console.log(err);
  });
