import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  CloseButton,
  Text,
  Heading
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.900">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/">
              <Text color="white">Home</Text>
            </Link>
            <Link to="/contact">
              <Text color="white">Contact</Text>
            </Link>
            <Link to="/about">
              <Text color="white">About</Text>
            </Link>
            <Link to="/favorites">
              <Text color="white">Favorites</Text>
            </Link>
          </HStack>
        </HStack>
        {/* search bar component*/}
        
        {/*  */}
        <Flex alignItems="center">
          <IconButton
            size="md"
            icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        <SearchBox />
      </Flex>
      
      {isOpen ? (
        <Box
          pb={4}
          display={{ md: "none" }}
          bg="gray.700"
          borderRadius="5px"
          p="15px"
        >
          <Stack as="nav" spacing={4}>
            <Link px={2} py={1} rounded="md" to="/">
              <Text color="white" _hover={{ textDecoration: "underline" }}>
                Home
              </Text>
            </Link>
            <Link px={2} py={1} rounded="md" to="/about">
              <Text color="white" _hover={{ textDecoration: "underline" }}>
                About
              </Text>
            </Link>

            <Link px={2} py={1} rounded="md" to="/contact">
              <Text color="white" _hover={{ textDecoration: "underline" }}>
                Contact
              </Text>
            </Link>

            
            <Link px={2} py={1} rounded="md" to="/favorites">
              <Text color="white" _hover={{ textDecoration: "underline" }}>
                Favorites
              </Text>
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
