import { Spinner, Box, SimpleGrid, Heading } from "@chakra-ui/react";
import useFetch from "../../useFetch";
import Product from "../../Components/Product";

const AndroidGames = () => {
  const { data, loading } = useFetch(
    `https://api.rawg.io/api/games?key=b2ad4f7bf28f403e80e2c2bdbfce5824&platforms=21`
  );

  return (
    <>
      {loading ? (
        <Box>
         <Spinner color="teal.300" mt="20px" />
        </Box>
      ) : (
        <>
          <Heading color="white" mt="20px">
            Android Games
          </Heading>
          <SimpleGrid minChildWidth={250} spacing={10} mt="20px">
            {data &&
              data.results.map((item, index) => (
                <Product data={item} key={index} />
              ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default AndroidGames;
