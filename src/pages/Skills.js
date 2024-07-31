import React from "react";
import { Box, Heading, SimpleGrid, Text, Progress } from "@chakra-ui/react";

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "HTML & CSS", level: 85 },
  { name: "Express JS", level: 80 },
  // Tambahkan skill lainnya di sini
];

const Skills = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {skills.map((skill, index) => (
          <Box key={index}>
            <Text fontWeight="bold">{skill.name}</Text>
            <Progress value={skill.level} size="sm" colorScheme="primary" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
