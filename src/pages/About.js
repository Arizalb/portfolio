import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Skills from "./Skills";
import Experience from "./Experience";

const About = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg" mb="4">
        Hi, I'm Rizal Baehaqi, a student at Ivet University. I have experience
        in Web Backend Programmer. I love working on projects that involve
        Programming.
      </Text>

      <Skills />

      <Experience />
    </Box>
  );
};

export default About;
