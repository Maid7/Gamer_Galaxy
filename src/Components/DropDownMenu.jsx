import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const DropDownMenu = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" maxWidth="280px">
      {/* Menu item 1 */}
      <Menu>
        <MenuButton
          mt="30px"
          colorScheme="gray"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Platforms
        </MenuButton>
        <MenuList>
          <Link to="/pc-games">
            <MenuItem>PC</MenuItem>
          </Link>
          <Link to="/ps-games"><MenuItem>PlayStation</MenuItem></Link>
          <Link to="/xbox-games">
            <MenuItem>Xbox</MenuItem>
          </Link>
          <Link to="/nintendo-games">
            <MenuItem>Nintendo</MenuItem>
          </Link>
          <Link to="/android-games">
            <MenuItem>Android</MenuItem>
          </Link>
          <Link to="/linux-games">
            <MenuItem>Linux</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      {/* Menu item 2 */}
      <Menu >
        <MenuButton
          mt="30px"
          colorScheme="gray"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          OrderBy:
        </MenuButton>
        <MenuList>
          <Link to="/">
            <MenuItem>Best Rated</MenuItem>
          </Link>
          <Link to="/created-games">
            <MenuItem>Created</MenuItem>
          </Link>
          <Link to="/released-games">
            <MenuItem>Release Date</MenuItem>
          </Link>
          <Link to="/name-games">
            <MenuItem>Name</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DropDownMenu;
