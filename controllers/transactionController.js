import transaction from "../model/transaction.js";

const transactionCotroller = async (req, res) => {
  try {
    const transactions = await transaction
      .find()
      .limit(60)
      .sort({ createdOn: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({
      error: "transaction not found",
      errorFromtransactionController: error,
    });
  }
};

export default transactionCotroller;
