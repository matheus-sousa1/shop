import axios from "axios";
import { useEffect } from "react"
import { useParams} from "react-router-dom"
import useDispatch from "react-redux"
import {selectedProduct} from "../redux/actions/productActions"

const ProductDetail = () => {
  const {image, title, category, price, description} = product
  const product = useSelector((state ) => state.product)

  const {productId} = useParams()
  const dispatch = useDispatch()
  

  console.log(product)

  const fetchProductDetail = async () => {
    const response  = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log("err", err) 
    });

    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
   if(productId && productId !== "") fetchProductDetail();
  }, [productId])
  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductDetail;
