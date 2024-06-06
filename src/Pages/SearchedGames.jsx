import { useContext } from "react";
import { GlobalContext } from "../context";
import { Spinner, SimpleGrid } from "@chakra-ui/react";

import Product from "../Components/Product";

const SearchedGames = () => {
  const { loading, searchedGames } = useContext(GlobalContext);

  return (
    <>
      {loading ? (
        <Box>
          <Spinner mt="20px" color="purple.300" />
        </Box>
      ) : (
        <SimpleGrid minChildWidth={250} spacing={10} mt="20px">
          {searchedGames.results &&
            searchedGames.results.map((item, index) => (
              <Product data={item} key={index} />
            ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default SearchedGames;
