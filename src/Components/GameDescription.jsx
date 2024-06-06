
import { useState } from 'react';
import { Box, Text, Button,Heading } from '@chakra-ui/react';

const GameDescription = ({ text, initialLength = 300 }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Box mt="30px">
        <Heading color="white">About</Heading>
      <Text color="white" fontSize="sm" maxWidth="100%" whiteSpace="pre-wrap" overflowWrap="break-word">
        {showMore ? text : `${text.substring(0, initialLength)}...`}
      </Text>
      <Button
        mt={2}
        colorScheme="teal"
        size="sm"
        variant="link"
        onClick={handleToggle}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </Button>
    </Box>
  );
};

export default GameDescription