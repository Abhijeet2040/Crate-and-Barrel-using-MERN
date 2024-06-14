import {
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const token = localStorage.getItem("token") || null;

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleAccount = () => {
    const token = localStorage.getItem("token") || null;
    if (token !== null) {
      navigate("/account");
    } else {
      navigate("/register");
    }
  };
  // const handleHome = () => {
  //   navigate("/");
  // };
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <nav>
      <Flex justify="space-between" align="center" px="60px">
        <Flex align="center" gap="20px" paddingLeft={350}>
          {/* <InputGroup
            bg="white"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
            width="20rem"
            size="sm"
          >
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
            <Input
              type="text"
              borderRadius="5px"
              placeholder="What are you looking for ?"
            />
          </InputGroup> */}
          <Flex
            py="20px"
            px="10px"
            flexDirection="column"
            align="center"
            justifyContent="flex-start" // Align children elements (text) to the left
            alignItems="center"
            mx={{ base: "0px", sm: "5rem", md: "14rem", lg: "5rem" }}
          >
            <Link to={"/"}>
              <Heading
                fontSize="2.8rem"
                lineHeight="1.8rem"
                fontWeight={"bold"}
                color="black"
                letterSpacing="1px"
                paddingBottom={3}
              >
                Crate&Barrel
              </Heading>
            </Link>
          </Flex>
          <button className="user-icon" onClick={handleAccount}>
            {" "}
            <RiAccountCircleFill size={25} color="black.500" ml="20px" />
          </button>
          <button className="cart" onClick={handleCart}>
            <AiOutlineShoppingCart
              size={25}
              style={{ marginTop: "-41px" }}
              color="gray.500"
              ml="20px"
            />
          </button>
        </Flex>
      </Flex>
      <div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/Sofa">Sofa</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/chairs">Chairs</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/Tables">Tables</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/lamps">Lamps</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/bedding">Bedding</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/bath">Bath</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="lig Dht" color="white">
                <Link to="/products/decor&pillows">Decor & Pillows</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/lighting">Lighting</Link>
              </Text>
            </li>
            <li className="items">
              {token ? (
                <RiAccountCircleFill
                  onClick={() => {
                    navigate("/account");
                  }}
                />
              ) : (
                <Text fontWeight="light" color="#5e5e5e">
                  CREATE AN ACCOUNT
                </Text>
              )}
            </li>
            <li className="items">
              {token ? (
                ""
              ) : (
                <Text fontWeight="light" color="#5e5e5e">
                  LOG IN
                </Text>
              )}
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
