/* eslint-disable react/prop-types */
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

const Breadcrum = (props) => {
  return (
    <div>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        borderBottom="0.1rem solid #f5f5f5"
        px="1.3rem"
        py="0.8rem"
        fontWeight="600"
        fontSize="0.8rem"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/products/?category=${category}">
            {props.category}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrum;
