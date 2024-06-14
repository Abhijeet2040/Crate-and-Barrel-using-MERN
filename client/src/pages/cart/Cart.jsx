import { useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("CART")) || []
  );
  const [userID, setUserID] = useState("");

  const navigate = useNavigate();
  const toast = useToast();
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, ind) => ind !== index);
    setCart(updatedCart);
    localStorage.setItem("CART", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getUserID = async () => {
    const url = "http://localhost:5000";
    try {
      const res = await fetch(`${url}/users/details`, {
        headers: {
          authorization: token,
        },
      });
      const user = await res.json();
      console.log(user);
      if (user) {
        setUserID(user._id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  getUserID();

  const checkout = async () => {
    if (token) {
      const url = "http://localhost:5000";
      const payload = {
        userID: userID,
        products: cart,
        date_of_purchase: "",
      };
      try {
        const response = await fetch(`${url}/orders`, {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log(data);
        localStorage.removeItem("CART");
        toast({
          title: "Order Placed",
          description: "We have placed your order.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/");
      } catch (err) {
        console.log(err);
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } else {
      toast({
        title: "Login to purchase",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <div>
      <div id="page-heading">
        <h2>BAG</h2>
        <hr />
      </div>
      <div id="page-section">
        <div id="cart-container">
          <p id="cart-items">
            YOUR ITEMS (<span>{cart.length}</span>)
          </p>
          <div id="append-cart">
            {cart.map((item, index) => (
              <div id="card" key={index}>
                <div>
                  <p className="item-name">{item.name}</p>
                  <button id="remove" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
                <div>
                  <div id="item-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div id="item-details">
                    <p className="item-qty">
                      Quantity: <span>{item.quantity}</span>
                    </p>
                    <p className="item-price">
                      Price: $<span>{item.price * item.quantity}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <hr />
          </div>
        </div>
        <div id="order-summary">
          <p>ORDER SUMMARY</p>
          <div>
            <p>TOTAL</p>
            <hr />
            <div>
              <p>BAG TOTAL</p>
              <p>
                $<span id="bag-total">{getTotalPrice()}</span>
              </p>
            </div>
            <div>
              <p>
                <b>TOTAL</b>
              </p>
              <p>
                <b>
                  $<span id="total">{getTotalPrice()}</span>
                </b>
              </p>
            </div>
            <p style={{ textAlign: "center" }}>(Not including delivery)</p>
            <button id="checkout" onClick={checkout}>
              SECURE CHECKOUT
            </button>
            <p>We accept:</p>
            <div>
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc61fa691/images/payment_methods/basket_visa.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb708a05a/images/payment_methods/basket_amex.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw1c8f39d6/images/payment_methods/apple_pay.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
