import mongoose from "mongoose";

const { Schema } = mongoose;

const monthSchema = new Schema({
  month: String,
  revenue: Number,
  expenses: Number,
  operationalExpenses: Number,
  nonOperationalExpenses: Number,
});

const daySchema = new Schema({
  date: String,
  expenses: Number,
  otherExpenses: Number,
});

const KPISchema = new Schema(
  {
    totalProfit: Number,
    totalRevenue: Number,
    totalExpenses: Number,
    expensesByCategory: Map,
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("KPI", KPISchema);
