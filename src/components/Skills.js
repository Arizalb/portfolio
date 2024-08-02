import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Progress,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import javascriptLogo from "../assets/js.svg";
import reactLogo from "../assets/react.svg";
import nodejsLogo from "../assets/nodejs.svg";
import htmlCssLogo from "../assets/html.svg";
import expressLogo from "../assets/express.svg";
import expressLogoDark from "../assets/expressDark.svg";

const skills = [
  { name: "JavaScript", level: 80, logo: javascriptLogo },
  { name: "React", level: 75, logo: reactLogo },
  { name: "Node.js", level: 70, logo: nodejsLogo },
  { name: "HTML & CSS", level: 85, logo: htmlCssLogo },
  {
    name: "Express JS",
    level: 80,
    logoLight: expressLogo,
    logoDark: expressLogoDark,
  },
  // Tambahkan skill lainnya di sini
];

const Skills = () => {
  const { colorMode } = useColorMode();

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {skills.map((skill, index) => (
          <Box key={index} p={2}>
            <Flex align="center" mb={2}>
              <Box
                as="img"
                src={
                  skill.name === "Express JS"
                    ? colorMode === "light"
                      ? skill.logoLight
                      : skill.logoDark
                    : skill.logo
                }
                alt={`${skill.name} logo`}
                width="24px"
                height="24px"
                mr={4}
              />
              <Text fontWeight="bold" mr={4}>
                {skill.name}
              </Text>
              <Text>{skill.level}%</Text>
            </Flex>
            <Progress value={skill.level} size="sm" colorScheme="primary" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
