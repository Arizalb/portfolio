import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";

const FavoriteMovies = () => {
  const { colorMode } = useColorMode();

  const movieRecommendations = [
    {
      title: "Oppenheimer",
      platforms: [
        /* {
          name: "Netflix",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
          link: "https://www.netflix.com/title/81126869",
        },*/
        {
          name: "Amazon Prime Video",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
          link: "https://www.primevideo.com/detail/Oppenheimer/0TQ0HYSFFKAO9W3UUIOMSTPUJ7",
        },
        {
          name: "Trailer",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",
          link: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
        },
      ],
    },
    {
      title: "Dune: Part Two",
      platforms: [
        {
          name: "Amazon Pwime Video",
          // logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
          link: "https://www.primevideo.com/detail/Dune-Part-Two/0NW4P371MNSJ4Q6JS5KVBIDW8Q",
        },
        {
          name: "Trailer",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",
          link: "https://www.youtube.com/watch?v=Way9Dexny3w",
        },
      ],
    },
    {
      title: "Avengers: Endgame",
      platforms: [
        {
          name: "Disney+",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
          link: "https://www.disneyplus.com/movies/avengers-endgame",
        },
        {
          name: "Trailer",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",
          link: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        },
      ],
    },
  ];

  return (
    <Box
      p={4}
      bg={colorMode === "dark" ? "gray.800" : "white"}
      color={colorMode === "dark" ? "white" : "black"}
    >
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        My Favorite Movies
      </Heading>

      <VStack spacing={8}>
        {movieRecommendations.map((movie, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
            position="relative"
            _hover={{ boxShadow: "lg" }}
            overflow="hidden"
            bg={colorMode === "dark" ? "gray.700" : "gray.100"}
          >
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
              {movie.title}
            </Text>
            <SimpleGrid columns={[1, null, 2]} spacing={4}>
              {movie.platforms.map((platform, pIndex) => (
                <Box
                  key={pIndex}
                  p={2}
                  borderWidth="1px"
                  borderRadius="md"
                  _hover={{
                    bg: colorMode === "dark" ? "gray.600" : "gray.200",
                    transform: "scale(1.05)",
                  }}
                  transition="transform 0.3s ease"
                  position="relative"
                  overflow="hidden"
                >
                  <HStack spacing={4} alignItems="center">
                    <Box
                      p={1}
                      bg="white"
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        boxSize="50px"
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                      />
                    </Box>
                    <Box flex="1">
                      <Text fontSize="md">{platform.name}</Text>
                    </Box>
                    <Button
                      colorScheme="blue"
                      as="a"
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.1)" }}
                    >
                      Watch Now
                    </Button>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default FavoriteMovies;
