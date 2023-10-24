import kpi from "../model/kpi.js";

const kpiCotroller = async (req, res) => {
  try {
    const kpis = await kpi.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({
      error: "KPI not found",
      errorFromKpiController: error,
    });
  }
};

export default kpiCotroller;
