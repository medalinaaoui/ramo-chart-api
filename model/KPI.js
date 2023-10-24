import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const schema = mongoose.Schema;
loadType(mongoose);

const monthSchema = new schema(
  {
    month: String,
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const daySchema = new schema(
  {
    date: String,
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const KPISchema = new schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  {
    toJSON: {
      getters: true,
    },
    timestamps: true,
  }
);

export default mongoose.model("KPI", KPISchema);
