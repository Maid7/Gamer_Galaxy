import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const About = () => {
  return (
    <Box p="40px" textAlign="Center">
      <Heading color="white">About us</Heading>
      <Text fontSize="20px" mt="20px" color="gray.500">
        Welcome to Gamer Galaxy, your ultimate destination for discovering,
        exploring, and keeping track of the best video games across all
        platforms. Whether you are a hardcore gamer, a casual player, or a
        curious newcomer, we aim to provide you with a comprehensive and
        enjoyable experience.
      </Text>
      <Box mt="2em" textAlign="left">
        <Text fontSize="20px" fontWeight="bold" color="white">
          Our Mission
        </Text>
        <Text mt="10px" color="gray.500">
          Our mission is to create the most user-friendly and detailed game
          catalog on the web. We strive to help gamers find their next favorite
          game, revisit classics, and stay up-to-date with the latest releases.
          Our extensive database includes information on thousands of games,
          spanning various genres, platforms, and eras.
        </Text>
        <Text fontSize="20px" fontWeight="bold" mt="10px" color="white">
          What We Offer
        </Text>
        <List spacing={3} mt="10px">
          <ListItem color="gray.500">
            <ListIcon as={MdCheckCircle} color="gray.500" />
            Extensive Game Database: Our catalog features detailed information
            on a wide range of games, including descriptions, release dates,
            genres, platforms, and ratings.
          </ListItem>
          <ListItem color="gray.500">
            <ListIcon as={MdCheckCircle} color="gray.500" />
            Wishlist and Collection Tracking: Keep track of the games you own,
            want to play, or are eagerly anticipating with our easy-to-use
            wishlist and collection features.
          </ListItem>
          <ListItem color="gray.500">
            <ListIcon as={MdCheckCircle} color="gray.500" />
            Stay informed with the latest news, updates, and trends in the
            gaming world.
          </ListItem>
        </List>
        <Text fontSize="20px" fontWeight="bold" mt="10px" color="white">
          Story
        </Text>
        <Text mt="10px" color="gray.500">
          Urban Bazaar was founded by Maid Sejdinovic in 2024, born out of a
          desire to "create a go-to destination for gamers", "bring chic and
          affordable fashion to everyone". What started as a small passion
          project has grown into a thriving online catalog game store
        </Text>
        <Text fontSize="20px" fontWeight="bold" mt="10px" color="white">
          Get In Touch
        </Text>
        <Text mt="10px" color="gray.500">
          We’re always looking for ways to improve and enhance our website. If
          you have any suggestions, feedback, or questions, please don’t
          hesitate to reach out to us. Your input is invaluable in helping us
          create the best possible experience for our users. Thank you for
          visiting Gamer Galaxy. Happy gaming!
        </Text>
      </Box>
    </Box>
  );
};

export default About;
