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

// //---------****** Insert Data- inserting one ***---------------//
// const user1 = new User({
//   name: "Shiv",
//   email: "Shiv@gmail.com",
//   age: 24,
// });

// user1.save();

// const user2 = new User({
//   name: "Raj",
//   email: "Raj@gmail.com",
//   age: 23,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Inserting Multiple

// User.insertMany([
//   { name: "Nik", email: "Nik@gmail.com", age: 22 },
//   { name: "Deep", email: "deep@gmail.com", age: 23 },
//   { name: "Shivraj", email: "shivraj@gmail.com", age: 23 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//-----------****FIND / READ data****--------//

// User.find({ age: { $gt: 24 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//--------------**** UPDATE Query ****---------//

// User.updateOne({ name: "Shivraj" }, { age: 35 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: { $gt: 23 } }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//---------------------------*** DELETE ******--------------//

User.deleteOne({ name: "Adam" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
