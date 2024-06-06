import { Outlet } from "react-router-dom";
import { useEffect } from "react";
// import react icons
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaAndroid,
  FaLinux,
  FaPuzzlePiece,
  FaMap,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { FaGun } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { PiStrategyDuotone } from "react-icons/pi";

//////////////
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Grid, Heading, GridItem, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DropDownMenu from "../Components/DropDownMenu";

const RootLayout = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.900" minHeight="100vh">
      {/* Grid item 1 */}
      <GridItem
        as="aside"
        colSpan={{base: 6, md: 1, lg: 2,xl: 1}}
        bg="gray.800"
        minHeight={{sm: "40vh",lg: "100vh"}}
        p={{md: "15px",lg: "30px"}}
        display={{base: "none", sm: "none", md: "none", lg: "block"}}
      >
       <Link to="/"> <Heading color="white">Gamer Galaxy</Heading></Link>
        {/* Platforms */}
        <Text fontSize="24px" color="white" mt="20px">
          Platforms
        </Text>
        <Flex justifyContent="space-around" flexDirection={{sm: "row", md: "column" ,lg: "column"}} color="white" pt="10px">
          <Flex alignItems="center">
            <FaWindows />
            <Link to="/pc-games">
              <Text ml="10px">PC</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <FaPlaystation />
            <Link to="/ps-games">
              <Text ml="10px">PlayStation</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <FaXbox />
            <Link to="/xbox-games">
              {" "}
              <Text ml="10px">Xbox</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <SiNintendo />
            <Link to="/nintendo-games">
              {" "}
              <Text ml="10px">Nintendo</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <FaAndroid />
            <Link to="/android-games">
              {" "}
              <Text ml="10px">Android</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <FaLinux />
            <Link to="/linux-games">
              {" "}
              <Text ml="10px">Linux</Text>
            </Link>
          </Flex>
        </Flex>
        {/* Genres */}
        <Text fontSize="24px" color="white" mt="20px">
          Genres
        </Text>
        <Flex justifyContent="space-around" flexDirection={{sm: "row",md: "column" ,lg: "column"}} color="white" pt="10px">
          <Flex alignItems="center">
            <FaGun />
            <Link to="/action-games">
              <Text ml="10px">Action</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <IoCarSportOutline />
            <Link to="/racing-games">
              <Text ml="10px">Racing</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <PiStrategyDuotone />
            <Link to="/strategy-games">
              <Text ml="10px">Strategy</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <FaPuzzlePiece />
            <Link to="/puzzle-games">
              <Text ml="10px">Puzzle</Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <FaMap />
            <Link to="/adventure-games">
              <Text ml="10px">Adventure</Text>
            </Link>
          </Flex>
        </Flex>
      </GridItem>

      {/* Grid item 2 */}
      <GridItem
      as="main" 
      p="10px 10px"
      colSpan={{base: 6,md: 5, lg: 4,xl: 5}}
      >
        <Heading color="white" display={{sm: "block", lg: "none"}}>GamerGalaxy</Heading>
        <Navbar />
        {/* Menu Component to filter platforms */}
        <DropDownMenu />
        <Outlet />
        <Footer/>
      </GridItem>
     
    </Grid>
  );
};

export default RootLayout;
