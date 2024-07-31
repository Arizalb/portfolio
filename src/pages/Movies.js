import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const FavoriteMovies = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        My Favorite Movies
      </Heading>

      <Box mb={6}>
        <Text fontSize="xl" mb={2}>
          Oppenheimer
        </Text>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/bK6ldnjE3Y0"
          title="Oppenheimer Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>

      <Box mb={6}>
        <Text fontSize="xl" mb={2}>
          Dune: Part Two
        </Text>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Way9Dexny3w"
          title="Dune: Part Two Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>

      <Box mb={6}>
        <Text fontSize="xl" mb={2}>
          Avengers: Endgame
        </Text>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/TcMBFSGVi1c"
          title="Avengers: Endgame Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default FavoriteMovies;
