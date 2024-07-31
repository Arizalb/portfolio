import React from "react";
import { Box, Heading, VStack, Text, Badge } from "@chakra-ui/react";

const experiences = [
  {
    position: "Frontend Developer",
    company: "Company A",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the frontend of various web applications.",
  },
  {
    position: "Backend Developer",
    company: "Company B",
    duration: "Mar 2018 - Dec 2019",
    description: "Implemented and managed backend services and APIs.",
  },
  // Tambahkan pengalaman lainnya di sini
];

const Experience = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Experience
      </Heading>
      <VStack spacing={4} align="left">
        {experiences.map((experience, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb={2}>
              {experience.position}{" "}
              <Badge colorScheme="primary">{experience.company}</Badge>
            </Heading>
            <Text fontSize="sm" mb={2}>
              {experience.duration}
            </Text>
            <Text>{experience.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
