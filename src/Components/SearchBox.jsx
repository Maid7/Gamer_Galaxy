import { FormControl, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {  useContext } from "react";
import { GlobalContext } from "../context";

const SearchBox = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <>
      <FormControl
        display="flex"
        alignItems="center"
        maxWidth="400px"
        justifyContent="space-between"
        onSubmit={(e) => e.preventDefault()}
        h="20px"
        borderRadius="20px"
        border="none"
        outline="none"
      
      >
        <Input
        bg="gray.200"
         ml="10px"
          color="black"
          type="text"
          role="searchbox"
          placeholder="search game..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        
        />
        <Button colorScheme="teal" ml="5px" onClick={handleSubmit}>
          Search
        </Button>
      </FormControl>
    </>
  );
};

export default SearchBox;
