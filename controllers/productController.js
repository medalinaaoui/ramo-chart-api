import product from "../model/product.js";

const productCotroller = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({
      error: "product not found",
      errorFromproductController: error,
    });
  }
};

export default productCotroller;
