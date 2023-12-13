import mongoose from "mongoose";

type ProductType = {
  name: string,
  description: string,
  price: number,
  currency: "USD" | "SEK";
}

const productSchema = new mongoose.Schema<ProductType>({
  name: String,
  description: String,
  price: Number,
  currency: String
});

const ProductModel = mongoose.model('product', productSchema);

