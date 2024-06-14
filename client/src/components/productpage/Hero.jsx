/* eslint-disable react/prop-types */
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Hero(props) {
  const category = props.category;
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/hero/${category}`);
        const data = await response.json();
        setHeading(data.data[0].heading);
        setDetails(data.data[0].details);
        setImgSrc(data.data[0].img);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 3 }}
        direction={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Stack flex={1} spacing={{ base: 2, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            letterSpacing="2px"
          >
            <Text as={"span"} position={"relative"}>
              {heading}
            </Text>
          </Heading>
          <Text color="#5e5e5e" fontSize="0.8rem" fontWeight="100">
            {details}
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"lg"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={imgSrc}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
