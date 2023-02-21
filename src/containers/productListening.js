import { useDispatch, useSelector } from "react-redux";
import ProductComponet from "./productComponent";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListening = () => {
  const products = useSelector((state) => state);
  const dispetch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispetch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <div className="ui grid container">
      <ProductComponet />
    </div>
  );
};

export default ProductListening;
