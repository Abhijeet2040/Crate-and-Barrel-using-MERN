/* eslint-disable react/prop-types */
import { Card, CardBody, Image, Text, Stack } from "@chakra-ui/react";
import ProductDetails from "../../pages/productdetails/ProductDetails";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ _id, name, category, price, image }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    <ProductDetails id="_id" />;
    navigate(`/products/${category}/${_id}`);
  };
  return (
    <div>
      <Card maxW="sm" shadow="none" onClick={handleRedirect} cursor="pointer">
        <CardBody>
          <Image width="17rem" src={image} alt={name} />
          <Stack mt="3" spacing="2.5" color="#373737">
            <Text lineHeight="1.2rem" fontWeight="400">
              {name}
            </Text>
            {/* <Text lineHeight="1.2rem" fontWeight="400">
              {content}
            </Text> */}
            <Text fontSize="1rem" fontWeight="600">
              $ {price}
            </Text>
            <p
              style={{
                // paddingTop: "6px",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "1.1rem",
              }}
            ></p>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
