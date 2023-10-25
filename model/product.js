import mongoose from "mongoose";
import { loadType } from "mongoose-currency";
const schema = mongoose.Schema;
loadType(mongoose);

const productSchema = new schema({
  price: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  expense: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

export default mongoose.model("Product", productSchema);
