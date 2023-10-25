import mongoose from "mongoose";
import { loadType } from "mongoose-currency";
const schema = mongoose.Schema;
loadType(mongoose);

const transactionSchema = new schema({
  buyer: {
    type: String,
  },
  amount: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default mongoose.model("Transaction", transactionSchema);
