const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
// database coonection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// create Schema / Structure
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// creating Model(class)
const User = mongoose.model("User", userSchema);

// Insert Data- inserting one
const user1 = new User({ name: "Shiv", email: "Shiv@gmail.com", age: 24 });
user1.save();
