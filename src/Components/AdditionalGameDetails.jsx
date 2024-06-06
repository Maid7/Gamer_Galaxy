import { Flex, Heading, Text ,SimpleGrid,Box} from "@chakra-ui/react";

const AdditionalGameDetails = ({ data }) => {

  return (
     <>
     {/* 1 */}
     <Flex  alignItems="flex-start"   mt="50px">
      <Flex flexDirection="column" >
        <Heading color="white">Platforms</Heading>
        <Flex flexWrap="wrap" overflow="auto" maxH="200px">
        {data && data.platforms.map((platform,index)=> (
            <Text  color="gray.500" key={index} p="10px" textDecoration="underline" _hover={{textDecoration: "none"}}>{platform.platform.name}</Text>
         ))}
        </Flex>
        
      </Flex>
      <Flex flexDirection="column" ml="30px">
        <Heading color="white">Genre</Heading>
        <Flex flexWrap="wrap" overflow="auto" maxH="200px"> {data && data.genres.map((genre,index)=> (
            <Text  color="gray.500" key={index} p="10px" textDecoration="underline" _hover={{textDecoration: "none"}}>{genre.name}</Text>
         ))}</Flex>
       
      </Flex>
     </Flex>
      {/* 2 */}
      <Flex alignItems="flex-start" >
      <Flex flexDirection="column">
        <Heading color="white">Released date</Heading>
         <Text color="gray.500" p="10px" textDecoration="underline" _hover={{textDecoration: "none"}}>{data.released}</Text>
      </Flex>
      <Flex flexDirection="column" ml="30px">
        <Heading color="white">Developer</Heading>
        <Flex flexWrap="wrap" overflow="auto" maxH="200px"> {data && data.developers.map((developer,index)=> (
            <Text  color="gray.500" key={index} p="10px" textDecoration="underline" _hover={{textDecoration: "none"}}>{developer.name}</Text>
         ))}</Flex>
       
      </Flex>
     </Flex>
     {/* 3 */}
     <Flex flexDirection="column" mt="20px" >
         <Heading color="white">Tags</Heading>
         <Flex flexWrap="wrap" overflow="auto" maxH="200px">
            {data && data.tags.map((tag,index)=> (
                <Text color="gray.500" p="10px" textDecoration="underline" _hover={{textDecoration: "none"}} key={index}>{tag.name}</Text>
            ))}
         </Flex>
     </Flex>
     </>
  );
};

export default AdditionalGameDetails;
