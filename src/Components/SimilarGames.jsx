import {
  SimpleGrid,
  Text,
  Box,
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Divider,
  CardFooter,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SimilarGames = ({ id }) => {
  const [similarGames, setSimilarGames] = useState([]);

  useEffect(() => {
    const fetchSimilarGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}/game-series?key=b2ad4f7bf28f403e80e2c2bdbfce5824`,
          {
            headers: {
              "User-Agent": "Arcade",
              Authorization: "b2ad4f7bf28f403e80e2c2bdbfce5824",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
    
          setSimilarGames(data.results);
        } else {
          console.error("Failed to fetch trailers");
        }
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    };
    window.scrollTo(0, 0)

    fetchSimilarGames();
  }, [id]);

  return (
    <>
      <Heading color="white" mb="20px">
        Similar Games
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={10}>
        {similarGames &&
          similarGames.map((game) => (
            <Card key={game.id} maxW="sm" background="gray.700">
              <CardBody>
                <Link  to={`/${game.id}`}>
                  <Image src={game.background_image} borderRadius="lg" />
                </Link>

                <Stack mt="6" spacing="3">
                  <Heading size="md" color="white">
                    {game.name}
                  </Heading>

                  <Text fontSize="2xl">
                    {game.genres.map((genre) => (
                      <Text m="3px" color="white" bg="cyan.800" maxW="130px">
                        {genre.name}
                      </Text>
                    ))}
                  </Text>
                </Stack>
              </CardBody>
              <Divider color="white" />
              <CardFooter>
                <SimpleGrid columns="2" minChildWidth="200px">
                  <Flex color="white" justifyContent="space-between">
                    <Text>Release Date:</Text>
                    <Box>{game.released}</Box>
                  </Flex>
                  <Flex color="white" justifyContent="space-between">
                    <Text>Rating:</Text>
                    <Box>{game.rating}/5</Box>
                  </Flex>
                </SimpleGrid>
              </CardFooter>
            </Card> 
           
          ))}
      </SimpleGrid>
    </>
  );
};

export default SimilarGames;
