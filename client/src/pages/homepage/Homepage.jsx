import "./homepage.css";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="video-container">
        <div>
          <h1 style={{ color: "white", fontSize: "50px" }}>
            Furnishing Your Dreams
          </h1>
          <h2 style={{ color: "#ffd000", fontSize: "30px" }}>
            BUY BEST FURNITURES <br /> GET 20% OFF
          </h2>
          {/* <div>
            <button
              onClick={() => {
                navigate("/products/bath");
              }}
            >
              SHOP PRODUCTS
            </button>
            <button
              onClick={() => {
                navigate("/products/lighting");
              }}
            >
              EXPLORE
            </button>
          </div> */}
        </div>
        <video autoPlay muted loop>
          <source
            src="https://cdn.pixabay.com/vimeo/143842658/conference-room-1191.mp4?width=480&hash=b03e53d0463b92c8eed74cf70be7d55d2a45e4ca"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="slider1">
        <a
          onClick={() => {
            navigate("/products/Sofa");
          }}
        >
          <h4>Sofa</h4>
          <h3>Buy 2, Save 40%</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/chairs");
          }}
        >
          <h4>CHAIRS</h4>
          <h3>Buy 2, Save 20%</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/decor&pillows");
          }}
        >
          <h4>BEST COLLECTION</h4>
          <h3>beautiful interiors</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/bedding");
          }}
        >
          <h4>BEDS</h4>
          <h3>Unwind in Comfort</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/Tables");
          }}
        >
          <h4>TABLE</h4>
          <h3>Buy 2, Save 20%</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/lighting");
          }}
        >
          <h4>SPECIALS</h4>
          <h3>Good to Go</h3>
        </a>
      </div>
      <div id="container1">
        <div>
          <h1 style={{ color: "#ceb45c" }}>Where Comfort Meets Elegance</h1>
          <p className="sub-heading">Carmen Premium Bed </p>
          <p className="details">
            Experience a new level of comfort and elegance with our premium bed
            collection. Crafted with precision and care, our beds are designed
            to create your personal haven, where relaxation and rejuvenation go
            hand in hand. Indulge in the soft embrace of our sumptuous
            mattresses, engineered to provide the perfect balance of support and
            blissful sleep. Our bed frames boast an exquisite blend of
            aesthetics and durability, ensuring your peaceful slumber for years
            to come.
          </p>
          <div id="image">
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe953e761/merchAssets/content/USP%20Icons/Cotton_100_White.svg"
              alt=""
            />
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe298968b/merchAssets/content/USP%20Icons/non-iron-white.svg"
              alt=""
            />
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe410c02a/merchAssets/content/USP%20Icons/three-fit-white.svg"
              alt=""
            />
          </div>
          {/* <button>
            <a href="./shirts.html">SHOP THE COLLECTION</a>
          </button> */}
        </div>
      </div>

      <div id="grid2x2">
        <div>
          <img
            src="https://shop.hofindia.com/blog/wp-content/uploads/2019/09/blog-101.jpg"
            alt=""
          />
          <div>
            <h3>Executive chairs</h3>
            <p>
              Experience the pinnacle of relaxation with our meticulously
              crafted chairs. Designed to complement your lifestyle, our chairs
              combine aesthetics and functionality, providing you with the
              ultimate seating experience.
            </p>
            {/* <button>DISCOVER MORE</button> */}
          </div>
        </div>
        <div>
          <img
            src="https://italica.com/cdn/shop/files/PremiumSeries_9201_Brown_900x.jpg?v=1689317005"
            alt=""
          />
          <div>
            <h3>Comfy chairs</h3>
            <p>
              Whether you&apos;re unwinding after a long day or catching up on
              your favorite book, our chairs are tailored to support your
              body&apos;s natural contours, promoting better posture and
              reducing fatigue.
            </p>
            {/* <button>DISCOVER MORE</button> */}
          </div>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/3a/50/f6/3a50f61c36c9ab5a33b5c003adc190f1.png"
            alt=""
          />
          <div>
            <h3>Discover the sofa </h3>
            <p>
              sofa&apos;s luxurious upholstery
              <br />
              Experience the joy of designing your dream living space. Our
              diverse range of styles, colors, and configurations ensures that
              you&apos;ll find the perfect sofa to match your unique taste and
              home decor.
            </p>
            {/* <button>DISCOVER MORE</button> */}
          </div>
        </div>
        <div>
          <img
            src="https://aarsunwoods.com/wp-content/uploads/2022/02/Premium-Sofa-Set-Design-SF-0030C-F.jpg"
            alt=""
          />
          <div>
            <h3>Introducing the Sofa of Your Dreams.</h3>
            <p>
              Immerse yourself in the embrace of our premium fabrics, carefully
              selected for their softness and durability. Our sofas are
              engineered to stand the test of time, offering you years of
              delightful relaxation.
            </p>
            {/* <button>SHOP NOW</button> */}
          </div>
        </div>
      </div>

      <div id="ex-info">
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw50a0e485/images/icons-large/express-delivery.svg"
              alt=""
            />
          </div>
          <h4>CARBON NEUTRAL</h4>
          <p>
            We are proud to be Carbon Neutral with <br /> Planet Mark
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw50a0e485/images/icons-large/express-delivery.svg"
              alt=""
            />
          </div>
          <h4>WORLDWIDE DELIVERY</h4>
          <p>Tracked delivery to over 200 countries</p>
        </div>
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw92b7bf99/images/icons-large/returns.svg"
              alt=""
            />
          </div>
          <h4>EASY RETURNS</h4>
          <p>Easy returns up to 3 months after receipt</p>
        </div>
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw0b446799/images/icons-large/feefo_logo.svg"
              alt=""
              style={{ height: "20px", marginTop: "25px" }}
            />
          </div>
          <h4>AWARD-WINNING SERVICE</h4>
          <p>4.7/5 Customer experience Feefo rating</p>
        </div>
      </div>
      <div id="container2">
        <div>
          <h1 className="last">
            Experience the Ultimate in Bedroom Comfort with Our Exquisite Bed
            Furniture Collection
          </h1>
          <p className="last">
            Use code DREAMBED15 for 15% off your entire bed furniture purchase!
            Limited time offer.
            <br /> From modern sophistication to classic charm, our diverse
            collection caters to every taste and preference. Elevate your sleep
            experience with our meticulously curated bed furniture.
          </p>
          {/* <button>
            <a href="./shirts.html">FIND OUT MORE</a>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
