const { model, Schema } = require("mongoose");

const AccountsSchema = new Schema({
  username: String,
  funds: Number,
});

module.exports = model("Accounts", AccountsSchema);
