import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Music from "../components/Music";
import FavoriteMovies from "../components/Movies";
import StreamingRecommendation from "../components/Sites";

const Hobbies = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Hobbies
      </Heading>
      <Text mb={4}>yakin kamu bisa hidup tanpa musik dan film?</Text>

      <Music />
      <FavoriteMovies />
      <StreamingRecommendation />
    </Box>
  );
};

export default Hobbies;
