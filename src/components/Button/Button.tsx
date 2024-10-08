import React from "react";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export interface ButtonProps {
  title: string;
  titleColor: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const Button = ({
  title,
  titleColor,
  backgroundColor,
  width = "100px",
  height = "40px",
  ...rest
}: ButtonProps) => {
  const baseColor = backgroundColor || useColorModeValue("white", "gray.700");

  return (
    <Box
      padding="6"
      boxShadow="md"
      backgroundColor={baseColor}
      borderRadius="12px"
      width={width}
      height={height}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.300", "gray.600")}
      placeContent="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        filter: "brightness(0.9)",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      }}
      _active={{
        transform: "scale(0.95)",
        boxShadow: "lg",
      }}
      {...rest}
    >
      <Text color={titleColor} fontSize="18px" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};

export default Button;
