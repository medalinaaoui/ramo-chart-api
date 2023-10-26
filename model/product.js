import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  price: Number,
  expense: Number,
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

export default mongoose.model("Product", productSchema);
