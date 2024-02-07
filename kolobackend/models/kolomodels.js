const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")

const newkolomodels_Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  bvn: {
    type: String,
    // unique: true,
  },
  wallet: {
    type: Number,
    default:0.00,
  },
  profileImg: {
    type: String,
  },
  paymentHis: {
    type: String,
  },
  
});

newkolomodels_Schema.pre("save", function (next) {
  let numberofhash = 10;

  if (this.password !== undefined) {
    bcryptjs
      .hash(this.password, numberofhash)
      .then((hashedpassword) => {
        this.password = hashedpassword;
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

const newkolomodel =
  mongoose.model.new_kolousertable ||
  mongoose.model("new_kolousertable", newkolomodels_Schema);

module.exports = newkolomodel;
