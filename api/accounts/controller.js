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
    const _id = req.body._id;
    const account = await Accounts.findById(_id);

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    return res.status(200).json(account);
  } catch (error) {
    next(error);
  }
};

module.exports.createAccount = async (req, res, next) => {
  const account = Accounts.create(req.body);
  return res.status(201).json({ account });
};
module.exports.deleteAccount = async (req, res, next) => {
  try {
    const _id = req.body._id;
    const account = await Accounts.findById(_id);

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    const delete1 = await Accounts.deleteOne(account);

    return res.status(202).json(delete1);
  } catch (error) {
    next(error);
  }
};
