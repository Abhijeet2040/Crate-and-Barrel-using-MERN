import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Email = () => {
  return (
    <Flex flexWrap="wrap" justify="center" bg="#333" px="10" py="5" gap={5}>
      <Box
        display="flex"
        alignItems="center"
        fontSize="0.8rem"
        color="white"
        fontWeight="100"
      >
        We will keep you posted on new products and great offers
      </Box>
      <Box>
        <InputGroup
          bg="#ebedf3"
          borderRadius="5px"
          width="20rem"
          border="1px solid black"
          alignContent="center"
          size="sm"
        >
          <InputRightElement pointerEvents="none" bg="black">
            <ArrowForwardIcon color="white" />
          </InputRightElement>
          <Input
            type="email"
            bg="white"
            borderRadius="none"
            placeholder="Email address"
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default Email;
