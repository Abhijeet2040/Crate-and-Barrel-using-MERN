/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";

const Filter = ({ products, onFilterChange }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  useEffect(() => {
    applyFilters();
  }, [selectedSizes, selectedColors]);

  const applyFilters = () => {
    let filtered = products;

    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        selectedSizes.some((size) => product.size.includes(size))
      );
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColors.includes(product.color)
      );
    }
    onFilterChange(filtered);
  };

  const handleSizeFilterChange = (selected) => {
    setSelectedSizes(selected);
  };

  const handleColorFilterChange = (selected) => {
    setSelectedColors(selected);
  };

  return (
    <div>
      <Accordion border="white">
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                borderBlockEnd: "1px solid black",
              }}
              padding="15px 30px 15px 20px"
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="600"
                fontSize="0.9rem"
              >
                Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px="20px" fontSize="14px" lineHeight="1.8rem">
            <CheckboxGroup
              colorScheme="gray"
              value={selectedSizes}
              onChange={handleSizeFilterChange}
            ></CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                borderBlockEnd: "1px solid black",
              }}
              padding="15px 30px 15px 20px"
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="600"
                fontSize="0.9rem"
              >
                COLOUR
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px="20px" fontSize="14px" lineHeight="1.8rem">
            <CheckboxGroup
              colorScheme="gray"
              value={selectedColors}
              onChange={handleColorFilterChange}
            >
              <Stack spacing="1" direction="column">
                <Checkbox value="">ALL COLORS</Checkbox>
                <Checkbox value="black">BLACK</Checkbox>
                <Checkbox value="white">WHITE</Checkbox>
                <Checkbox value="blue">BLUE</Checkbox>
                <Checkbox value="brown">BROWN</Checkbox>
                <Checkbox value="cream">CREAM</Checkbox>
                <Checkbox value="green">GREEN</Checkbox>
                <Checkbox value="grey">GREY</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
