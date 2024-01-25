const express = require("express");
const router1 = express.Router();
const {
  getaccount,
  createAccount,
  deleteAccount,
  allaccount,
} = require("./controller");
const Accounts = require("../../models/Accounts");

router1.param("_id", async (req, res, next, _id) => {
  const account = await Accounts.findById(_id);
  if (!account) {
    return res.status(404).json({ massage: "account is not found" });
  }
  req.account = account;
  next();
});
router1.get("/", allaccount);
router1.get("/", getaccount);
router1.post("/", createAccount);
router1.delete("/", deleteAccount);

module.exports = router1;
