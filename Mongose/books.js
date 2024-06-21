//-------- ** Schema Validations ****-----------//

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
}

// Schema Validation / Rules for Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.insertMany([
  { title: "Mathematics", author: "MK Pawar", price: 100 },
  { title: "Science", author: "kk Nawar", price: 300 },
  { title: "Chemistry", author: "KK RR", price: 1000 },
]);
