import { SimpleGrid, Box, Spinner, Heading,Text } from "@chakra-ui/react";
import useFetch from "../useFetch";
import Product from "../Components/Product";


const Dashboard = () => {
  // b2ad4f7bf28f403e80e2c2bdbfce5824

  const { data, loading} = useFetch(
    `https://api.rawg.io/api/games?key=b2ad4f7bf28f403e80e2c2bdbfce5824&ordering=-rating&page_size=50`
  );
 
 console.log(data)

  return (
    <>
      {loading ? (
        <Box >
          <Spinner mt="20px" color="purple.300" />
        </Box>
      ) : (
        <>
          <Heading color="white" mt="20px">
           Best Rated Games
          </Heading>
          <Text color="white" mt="5px">Highly recommended</Text>
          <SimpleGrid minChildWidth={250} spacing={10} mt="20px">
            {data &&
              data.results.map((item, index) => (
                <>
                  <Product data={item} key={index} />
                </>
              ))}
            
          </SimpleGrid>
         
        </>
      )}
    </>
  );
};

export default Dashboard;
