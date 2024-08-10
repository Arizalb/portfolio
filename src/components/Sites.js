import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  useToken,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Pahe from "../assets/hobbies/pahe.jpg";

const recommendations = [
  {
    name: "Netflix",
    image: "https://img.icons8.com/3d-fluency/94/netflix-logo.png",
    description: "Streaming berbagai film dan serial TV.",
    url: "https://www.netflix.com/",
  },
  {
    name: "Disney+",
    image: "https://img.icons8.com/nolan/96/disney-plus.png",
    description:
      "Menonton film dan serial dari Disney, Pixar, Marvel, dan lainnya.",
    url: "https://www.hotstar.com/",
  },
  {
    name: "Pahe In",
    image: Pahe,
    description: "Download film dan series sepuasmu bro. Gratis.!",
    url: "https://www.pahe.ink",
  },
];

const StreamingRecommendation = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");
  const [shadowSm, shadowMd] = useToken("shadows", ["sm", "md"]);
  const { colorMode } = useColorMode();

  return (
    <Box p={4}>
      <Heading mb={6} fontSize="2xl" textAlign="center">
        Rekomendasi Situs Streaming Film
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {recommendations.map((site) => (
          <Box
            key={site.name}
            bg={bgColor}
            borderRadius="lg"
            boxShadow={shadowSm}
            p={5}
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: shadowMd,
              bg: hoverBgColor,
            }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <VStack align="start" spacing={3}>
              <Image
                src={site.image}
                alt={`${site.name} logo`}
                boxSize="80px"
                objectFit="contain"
              />
              <Text fontWeight="bold" fontSize="xl">
                {site.name}
              </Text>
              <Text
                fontSize="md"
                color={colorMode === "dark" ? "white" : "black"}
              >
                {site.description}
              </Text>
            </VStack>
            <Button
              as={Link}
              href={site.url}
              colorScheme="blue"
              isExternal
              fontWeight="medium"
              alignSelf="stretch"
              mt={3}
            >
              Kunjungi Situs
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StreamingRecommendation;
