import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Music from "./Music";
import FavoriteMovies from "./Movies";

const Hobbies = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Hobbies
      </Heading>
      <Text mb={4}>yakin kamu bisa hidup tanpa musik dan film?</Text>

      <Music />
      <FavoriteMovies />
    </Box>
  );
};

export default Hobbies;
