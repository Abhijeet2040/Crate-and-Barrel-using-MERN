import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = async () => {
    const payload = {
      email: email,
      password: password,
    };
    let res = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    localStorage.setItem("token", data.token);
    if (data.status === 200) {
      toast({
        title: "Logged In!",
        status: "success",
        position: "top-right",
        duration: 2000,
      });
      navigate("/");
    } else {
      toast({
        title: data.msg,
        status: "error",
        position: "top-right",
        duration: 2000,
      });
    }
  };

  return (
    <div className="top">
      <h2 style={{ color: "#333", padding: "1rem 35rem" }} className="heading">
        My account
      </h2>
      <div className="login">
        <div className="main">
          <div id="login-form">
            <label>Email address</label>
            <br />
            <input
              className="login-page-input"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="login-page-input"
              type="password"
              name="email"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <a href="#">Forgotten your password?</a>
            <br />
            <button
              className="login-page-btn"
              id="account-login"
              onClick={handleSubmit}
            >
              LOG IN
            </button>
          </div>
          <div
            id="register"
            style={{ paddingBlockStart: "0px", flexDirection: "column" }}
          >
            <h3
              style={{ color: "#333", paddingTop: "0px" }}
              className="heading"
            >
              New customers
            </h3>
            <p style={{ padding: "0px 20px" }}>
              Set up an account with us and you will be able to:
            </p>
            <div style={{ padding: "10px 20px" }}>
              <div>
                <img
                  src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dwc2e07cd3/images/svg-icons/order_history.svg"
                  alt=""
                />
              </div>
              <p>Check order status</p>
            </div>
            <div style={{ padding: "0px 20px" }}>
              <div>
                <img
                  src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dwd7e8876e/images/svg-icons/address_book.svg"
                  alt=""
                />
              </div>
              <p>Save multiple addresses to your address book</p>
            </div>
            <div style={{ padding: "10px 20px" }}>
              <div>
                <img
                  src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dwf3ccf7e4/images/svg-icons/personal_details.svg"
                  alt=""
                />
              </div>
              <p>Set your size and monogramming preferences</p>
            </div>
            <button
              className="login-page-btn"
              id="register-btn"
              onClick={() => {
                navigate("/register");
              }}
            >
              CREATE AN ACCOUNT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
