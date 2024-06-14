/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/productpage/ProductCard";
import Filter from "../../components/productpage/Filter";
import {
  Box,
  Grid,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Breadcrum from "../../components/productpage/Breadcrum";
import Hero from "../../components/productpage/Hero";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("recommended");

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/products/${category}`
      );
      const data = await response.json();
      setProducts(data.data);
      setFilteredProducts(data.data);
      setOriginalProducts(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = (filteredData) => {
    setFilteredProducts(filteredData);
  };

  const sortProducts = (order) => {
    if (order === "recommended") {
      setFilteredProducts(originalProducts);
    } else {
      const sorted = [...filteredProducts].sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
      );
      setFilteredProducts(sorted);
    }
    setSortOrder(order);
  };

  return (
    <div>
      <Breadcrum category={category} />
      <Hero category={category} />
      <Box display="flex" justifyContent="flex-end" my={4}>
        <Menu>
          <MenuButton
            as={Button}
            mx={7}
            px={6}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            size={"sm"}
            bg={"white"}
          >
            SORT BY <ChevronDownIcon ml={12} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => sortProducts("recommended")}>
              Recommended
            </MenuItem>
            <MenuItem onClick={() => sortProducts("asc")}>
              Price Low to High
            </MenuItem>
            <MenuItem onClick={() => sortProducts("desc")}>
              Price High to Low
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Grid
        templateColumns={{ lg: "1fr 5fr", xl: "1fr 5fr", "2xl": "1fr 5fr" }}
        gap={4}
      >
        <Box px="5">
          <Filter products={products} onFilterChange={handleFilterChange} />
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
        >
          {filteredProducts.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
