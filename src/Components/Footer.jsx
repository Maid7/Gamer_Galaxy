import { Box, Flex, Text, IconButton} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

 

  return (
    <Box
      as="footer"
      bg="gray.800"
      mt="40px"
      color="white"
      py="8"
      px="4"
      w="100%"
    >
      <Flex  justifyContent="space-between" alignItems="center" flexWrap="wrap" >
        <Flex direction="column" flex="1">
          <Text fontSize="lg" mb="2">
            Explore
          </Text>
          <Link mb="1">Home</Link>
          <Link mb="1" to="/contact">
            Contact
          </Link>
          <Link mb="1" to="/about">
            About Us
          </Link>
          <Link mb="1" to="favorites">
            Favorites
          </Link>
        </Flex>
        <Flex direction="column" flex="1">
          <Text fontSize="lg" mb="2">
            Connect
          </Text>
          <Link mb="1">Twitter</Link>
          <Link mb="1">Facebook</Link>
          <Link mb="1">Instagram</Link>
        </Flex>
        <Flex direction="column" flex="1">
          <Text fontSize="lg" mb="2">
            Legal
          </Text>
          <Link mb="1">Terms of Service</Link>
          <Link mb="1">Privacy Policy</Link>
        </Flex>
      </Flex>
      <Box mt="7">
        <Text textAlign="center" fontSize="sm">
          © {currentYear} Gamer Galaxy
        </Text>
        <Flex justify="center" mt="2">
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            colorScheme="teal"
            mr="2"
            size="lg"
          />
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            colorScheme="teal"
            mr="2"
            size="lg"
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            colorScheme="teal"
            size="lg"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
