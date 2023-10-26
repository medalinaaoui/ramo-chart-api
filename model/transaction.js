import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = new Schema({
  buyer: String,
  amount: Number,
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default mongoose.model("Transaction", transactionSchema);
