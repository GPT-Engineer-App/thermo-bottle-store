import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Thermo Bottle Pro",
    description: "High-quality insulated thermo bottle.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1574670700790-fa314ab37787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjB0aGVybW8lMjBib3R0bGV8ZW58MHx8fHwxNzEwNzAyMzA0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Thermo Bottle Lite",
    description: "Lightweight and compact thermo bottle.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1574670700790-fa314ab37787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwdGhlcm1vJTIwYm90dGxlfGVufDB8fHx8MTcxMDcwMjMwNHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Thermo Bottle Max",
    description: "Large capacity insulated thermo bottle.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1574670700790-fa314ab37787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMHRoZXJtbyUyMGJvdHRsZXxlbnwwfHx8fDE3MTA3MDIzMDR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

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
          Thermo Bottle Store
        </Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" aria-label="Shopping Cart" />
        <Badge marginLeft={2} colorScheme="blue">
          {cart.length}
        </Badge>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" padding={4}>
            <Image src={product.image} alt={product.name} marginBottom={4} />
            <Heading as="h2" size="md" marginBottom={2}>
              {product.name}
            </Heading>
            <Text marginBottom={4}>{product.description}</Text>
            <Flex align="center">
              <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
              <Spacer />
              <Button colorScheme="blue" size="sm" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
