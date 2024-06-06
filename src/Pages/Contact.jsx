import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xwkgdrvy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast({
        title: "Form submitted.",
        description: "We've received your message.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form.",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh" bg="gray.800" mt="30px">
      <Box
        bg="gray.900"
        p={6}
        rounded="md"
        shadow="md"
        width={["90%", "80%", "50%"]}
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel color="white">Name</FormLabel>
            <Input
              color="white"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="email" mb={4} isRequired>
            <FormLabel color="white">Email</FormLabel>
            <Input
              color="white"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="subject" mb={4}>
            <FormLabel color="white">Subject</FormLabel>
            <Input
              color="white"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="message" mb={4} isRequired>
            <FormLabel color="white">Message</FormLabel>
            <Textarea
              color="white"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>

          <Button colorScheme="teal" type="submit" width="full">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Contact;
