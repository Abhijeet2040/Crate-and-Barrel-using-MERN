/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import "./productdetails.css";
import { useParams } from "react-router";
const ProductDetails = () => {
  const { category, id } = useParams();
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImg] = useState("");
  const toast = useToast();
  useEffect(() => {
    const baseServerURL = "http://localhost:5000";

    async function fetchData() {
      try {
        const response = await fetch(
          `${baseServerURL}/products/${category}/${id}`
        );
        const responseData = await response.json();
        setProductData(responseData.data);
        setName(responseData.data.name);
        setImg(responseData.data.img);
        setPrice(responseData.data.price);
        console.log(responseData.data);
      } catch (err) {
        console.log("Error :", err);
      }
    }
    fetchData();
  }, []);

  const addToCart = () => {
    if (!isNaN(quantity) || quantity > 0) {
      const cartItem = {
        prod_id: productData._id,
        name,
        price,
        quantity,
        image,
      };
      const cart = JSON.parse(localStorage.getItem("CART")) || [];
      cart.push(cartItem);
      localStorage.setItem("CART", JSON.stringify(cart));
      toast({
        title: "Item Added To Cart",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Invalid Quantity",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div id="prod-container">
        {productData && (
          <>
            <div>
              <img src={productData.image} alt={productData.name} />
            </div>

            <div>
              <p id="prod-name">{productData.name}</p>
              <p id="prod-price">
                <b>${productData.price}</b>
              </p>
              <br />
              <br />
              <hr />
              {/* <p id="prod-details">{productData.details}</p> */}
              <br />
              <br />
              <br />
              <label htmlFor="prod-qty">
                <b>SELECT QUANTITY</b>
              </label>
              <select
                name="prod-qty"
                id="prod-qty"
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <button id="add_to_cart" onClick={addToCart}>
                ADD TO BAG
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
