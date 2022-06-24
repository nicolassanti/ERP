 const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fname: { type: String, lowercase: true, required: true },
    lname: { type: String, lowercase: true, required: true },
    email: { type: String, lowercase: true, required: true },
    passWrd: { type: String, required: true },
    isLogged: { type: Boolean, default: false },
    permission: { type: Array, lowercase: true, required: true, default: [] },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = model("User", userSchema);
