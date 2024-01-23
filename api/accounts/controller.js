const Accounts = require("../../models/Accounts");

module.exports.allaccount = async (req, res, next) => {
  try {
    const accounts = await Accounts.find();
    return res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
};

module.exports.getaccount = async (req, res, next) => {
  try {
    const account = await Accounts.findById();
    return res.status(200).json(account);
  } catch (error) {
    next(error);
  }
};

module.exports.createAccount = async (req, res, next) => {
  console.log(req.body);
  Accounts.push({
    id: Accounts[Accounts.length - 1].id + 1,
    username: req.body.username,
    funds: 0,
  });
  return res.status(201).json(Accountsccounts);
};
module.exports.deleteAccount = (req, res, next) => {
  try {
    const { id } = req.params;
    const account = Accounts.find((account) => {
      return account.id == id;
    });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    return res.status(202).json(account);
  } catch (error) {
    next(error);
  }
};
