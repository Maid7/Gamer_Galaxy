import { useContext } from "react";
import Product from "../Components/Product";
import { GlobalContext } from "../context";
import { SimpleGrid, Text,Heading } from "@chakra-ui/react";

const Favorites = () => {
  
  const { favoritesList } = useContext(GlobalContext);

  return (
    <>
    {favoritesList && favoritesList.length > 0 ? 
    <>
    <Heading color="white" mt="20px">Your Favorite Games</Heading>
     <SimpleGrid minChildWidth={250} spacing={10} mt="20px">
       {favoritesList &&
            favoritesList.map((item, index) => (
              <Product data={item} key={index} />
            ))}
     </SimpleGrid>
    </>
     :  <Text mt="30px" color="white" textAlign="center" mb="10em"> Nothing is added in favorites.</Text>
  } 
    </>
  )
}

export default Favorites
