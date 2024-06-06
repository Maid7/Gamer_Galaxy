import { SimpleGrid, Box, Spinner, Heading ,Text} from "@chakra-ui/react";
import useFetch from "../../useFetch";
import Product from "../../Components/Product";


const Released = () => {


  const { data, loading} = useFetch(
    `https://api.rawg.io/api/games?key=b2ad4f7bf28f403e80e2c2bdbfce5824&ordering=released&page_size=50`
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
           Release Date
          </Heading>
          <Text color="white" >Ordered by the date the games were created in the RAWG database in descending order.</Text>
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

export default Released;
