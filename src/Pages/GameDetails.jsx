import { useParams } from "react-router-dom";
import { useContext } from "react";
import useFetch from "../useFetch";
import { Button, Box, Heading, Spinner, Text, Flex } from "@chakra-ui/react";
// import component
import GameScreenshots from "../Components/GameScreenshots";
import GameDescription from "../Components/GameDescription";
import AdditionalGameDetails from "../Components/AdditionalGameDetails";
import GameStores from "../Components/GameStores";

import SimilarGames from "../Components/SimilarGames";
import { GlobalContext } from "../context";

const GameDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://api.rawg.io/api/games/${id}?key=b2ad4f7bf28f403e80e2c2bdbfce5824`
  );
  const { handleAddToFavorites, favoritesList } = useContext(GlobalContext);
  

  console.log(data)
  
  return (
    <>
      {loading ? (
        <Box>
          <Spinner color="teal.300" mt="20px" />
        </Box>
      ) : (
        <>
          <Box
            width="100%"
            height="150vh"
            backgroundImage={data.background_image}
            backgroundSize="cover"
            backgroundPosition="center"
            position="relative"
            color="white"
            mt="20px"
          >
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.7)"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              p={{ base: "10px", md: "20px" }}
              overflow="hidden"
            >
              <Flex
                flexDirection="column"
                flex="1"
                p={{ base: "10px", md: "20px" }}
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="13px"
                  ml="5px"
                  mt="20px"
                >
                  average playtime: {data.playtime} hours
                </Text>
                <Heading mt="10px">{data.name}</Heading>
                <Button
                  w="200px"
                  colorScheme="teal"
                  variant="solid"
                  mt="40px"
                  onClick={() => handleAddToFavorites(data)}
                >
                  {favoritesList && favoritesList.length > 0 && favoritesList.findIndex((item) => item.id === data.id) !== -1
                    ? "Remove From Favorites"
                    : "Add To Favorites"}
                </Button>
              </Flex>
            </Flex>
          </Box>
          {/* game description component */}
          <GameDescription text={data.description_raw} />
          <AdditionalGameDetails data={data} />
          <GameScreenshots id={id} />

          <GameStores id={id} />
          <SimilarGames id={id} />
        </>
      )}
    </>
  );
};

export default GameDetails;
