import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Contact Me
      </Heading>
      <FormControl id="name" mb={4}>
        <FormLabel>Your Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Your Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Your Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button colorScheme="primary" type="submit">
        Send Message
      </Button>
    </Box>
  );
};

export default Contact;
