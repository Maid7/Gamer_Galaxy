import React ,{useState,useEffect} from 'react'
import { Box, Heading, Text,Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const GameStores = ({id}) => {
    const [gameStores, setGameStores] = useState([]);

    useEffect(() => {
      const fetchGameStores = async () => {
        try {
          const response = await fetch(`https://api.rawg.io/api/games/${id}/stores?key=b2ad4f7bf28f403e80e2c2bdbfce5824`, {
            headers: {
              'User-Agent': 'Arcade', 
              'Authorization': 'b2ad4f7bf28f403e80e2c2bdbfce5824', 
            }
          });
  
          if (response.ok) {
            const data = await response.json();
       
            setGameStores(data.results);
          } else {
            console.error('Failed to fetch trailers');
          }
        } catch (error) {
          console.error('Error fetching trailers:', error);
        }
      };
  
      fetchGameStores();
    }, [id]);
   
   
  return (
    <Flex flexWrap="wrap" overflow="auto" maxH="600px" flexDirection="column">
      <Heading m="20px 0 20px 0" color="white">Where to buy game?</Heading>
      {gameStores && gameStores.map((url,index)=> (
            <Link to={url.url}  key={index} p="10px"  target="_blank">
              <Text 
              color="gray.500" 
              mt="20px"
              textDecoration="underline" 
              _hover={{textDecoration: "none"}}
              >{url.url}</Text>
              </Link> 
         ))}
    </Flex>
  )
}

export default GameStores



