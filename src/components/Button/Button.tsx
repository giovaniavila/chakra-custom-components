import React from "react";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export interface ButtonProps {
  title: string;
  titleColor: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

export const Button = ({
  title,
  titleColor,
  backgroundColor,
  width = "100px",
  height = "30px",
  ...rest
}: ButtonProps) => {
  const baseColor = backgroundColor || useColorModeValue("white", "gray.700");

  return (
    <Box
      padding="6"
      boxShadow="lg"
      backgroundColor={baseColor}
      borderRadius="10px"
      width={width}
      height={height}
      borderWidth="1px"
      placeContent="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        filter: "brightness(0.8)",
        cursor: "pointer",
        transition: ".3s",
      }}
      {...rest}
    >
      <Text color={titleColor} fontSize="20px" fontWeight="semibold">
        {title}
      </Text>
    </Box>
  );
};
