/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaAppStore,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize="0.9rem" color="white">
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box px="20" bg="#333">
      <Container as={Stack} maxW={"6xl"} py={10} px="">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack
            align={"flex-start"}
            fontSize="0.75rem"
            color="white"
            fontWeight="100"
          >
            <ListHeader color="white">HELP</ListHeader>
            <Box as="a" href={"#"}>
              FAQS
            </Box>
            <Box as="a" href={"#"}>
              SHIPPING
            </Box>
            <Box as="a" href={"#"}>
              RETURNS
            </Box>
            <Box as="a" href={"#"}>
              CONTACT US
            </Box>
            <Box as="a" href={"#"}>
              <br />
            </Box>
            <Box as="a" href={"#"}>
              CALL US: +44 20 8174 4100
            </Box>
          </Stack>

          <Stack
            align={"flex-start"}
            fontSize="0.75rem"
            color="white"
            fontWeight="100"
          >
            <ListHeader>LEGAL</ListHeader>
            <Box as="a" href={"#"}>
              TERMS AND CONDITIONS
            </Box>
            <Box as="a" href={"#"}>
              PRIVACY POLICY
            </Box>
            <Box as="a" href={"#"}>
              COOKIE POLICY
            </Box>
            <Box as="a" href={"#"}>
              ACCESSIBILITY STATEMENT
            </Box>
            <Box as="a" href={"#"}>
              CARBON NEUTRALITY STATEMENT
            </Box>
            <Box as="a" href={"#"}>
              ETHICAL TRADING POLICY
            </Box>
            <Box as="a" href={"#"}>
              MODERN SLAVERY STATEMENT
            </Box>
          </Stack>

          <Stack
            align={"flex-start"}
            fontSize="0.75rem"
            color="white"
            fontWeight="100"
          >
            <ListHeader>MORE INFO</ListHeader>
            <Box as="a" href={"#"}>
              ABOUT US
            </Box>
            <Box as="a" href={"#"}>
              CAREERS
            </Box>
            <Box as="a" href={"#"}>
              DOING THING PROPERLY
            </Box>
          </Stack>
          <Stack align={"flex-start"} color="white">
            <ListHeader>CONNECT WITH US</ListHeader>
            <Flex alignItems="center">
              <FaFacebook size={20} />
              <Text ml="2">Follow us on Facebook</Text>
            </Flex>
            <Flex alignItems="center">
              <FaTwitter size={20} />
              <Text ml="2">Follow us on Twitter</Text>
            </Flex>
            <Flex alignItems="center">
              <FaInstagram size={20} />
              <Text ml="2">Follow us on Instagram</Text>
            </Flex>
            <Flex alignItems="center">
              <FaAppStore size={20} />
              <Text ml="2">Download on the App Store</Text>
            </Flex>
            <Flex alignItems="center">
              <FaGooglePlay size={20} />
              <Text ml="2">Get it on Google Play</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      <hr></hr>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Heading
            fontSize="2.8rem"
            lineHeight="1.8rem"
            fontWeight={"bold"}
            color="white"
            letterSpacing="1px"
            paddingBottom={3}
          >
            Crate&Barrel
          </Heading>
          <Text fontSize="0.8rem" color="white">
            ©2023 Crate and Barrel. All rights reserved. Terms of Use Privacy
            Site Index Ad Choices If you are using a screen reader and are
            having problems using this website, please call (800) 967-6696 for
            assistance.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
