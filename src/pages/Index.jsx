import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const product = {
  id: 1,
  name: "Thermo Bottle Pro",
  description: "High-quality insulated thermo bottle.",
  price: 29.99,
  image: "https://images.unsplash.com/photo-1574670700790-fa314ab37787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjB0aGVybW8lMjBib3R0bGV8ZW58MHx8fHwxNzEwNzAyMzA0fDA&ixlib=rb-4.0.3&q=80&w=1080",
};

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="960px" margin="auto" padding={4}>
      <Flex align="center" marginBottom={8}>
        <Heading as="h1" size="xl">
          Thermostore
        </Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" aria-label="Shopping Cart" />
        <Badge marginLeft={2} colorScheme="blue">
          {cart.length}
        </Badge>
      </Flex>

      <Box borderWidth={1} borderRadius="lg" padding={8}>
        <Image src={product.image} alt={product.name} marginBottom={8} />
        <Heading as="h2" size="xl" marginBottom={4}>
          {product.name}
        </Heading>
        <Text fontSize="xl" marginBottom={8}>
          {product.description}
        </Text>
        <Flex align="center">
          <Text fontWeight="bold" fontSize="2xl">
            ${product.price.toFixed(2)}
          </Text>
          <Spacer />
          <Button colorScheme="blue" size="lg" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
