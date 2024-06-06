import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Flex,
  Text,
  Divider,
  CardFooter,
  Button,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <Card
      maxW="sm"
      bg="gray.800"
      boxShadow="0 0 3px #38B2AC, 0 0 2px #CCCCCC, 0 0 3px #38B2AC, 0 0 2px #38B2AC, 0 0 3px #b300ff, 0 0 3px #38B2AC"
    >
      <CardBody>
        <Image
          src={data.background_image}
          alt={data.name}
          borderRadius="lg"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Stack mt="6" spacing="3">
          <Flex justifyContent="space-between" alignItems="center">
            {data.genres &&
              data.genres.map((item) => (
                <Text
                  key={item.id}
                  color="white"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  {item.name}
                </Text>
              ))}
          </Flex>
          <Link to={`/${data.id}`}>
            <Heading size="md" color="white">
              {data.name}
            </Heading>
          </Link>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="14px" color="gray.500">
              Release date:
            </Text>
            <Text fontSize="14px" color="white">
              {data.released}
            </Text>
          </Flex>
          <Divider />
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="14px" color="gray.500">
              Playtime:
            </Text>
            <Text fontSize="14px" color="white">
              {data.playtime} hours
            </Text>
          </Flex>
          <Divider />
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="14px" color="gray.500">
              Rating:
            </Text>
            <Text fontSize="14px" color="white">
              {data.rating}/ 5
            </Text>
          </Flex>
          <Divider />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex alignItems="center" justifyContent="space-evenly" w="full">
          <Link to={`/${data.id}`}>
            <Button colorScheme="teal">View More</Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Product;
