import React from "react";
import { Box, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Hero from "../assets/profile.png";

const Home = () => {
  return (
    <Box p={4}>
      <Stack spacing={4}>
        <Heading as="h2" size="xl" mb={4}>
          Welcome to My Portfolio
        </Heading>

        <Image
          borderRadius="full"
          boxSize="150px"
          src={Hero}
          alt="Your Name"
          mb={4}
        />

        <Text fontSize="lg" mb={2}>
          Hi, I'm Rizal Baehaqi, a passionate developer who loves creating
          amazing web applications. This portfolio showcases my skills,
          projects, and experiences.
        </Text>
        <Text fontSize="sm" mb={4}>
          oh iya, portfolio ini saya buat murni karena saya gabut. bukan untuk
          proffessional, tapi jika Anda ingin hiring saya ya bolehlah. xixixi{" "}
          <br /> kalo mau full experience pake desktop woi, atau kalo di HP bisa
          dicentang mode desktopnya. lu kira atur responsive rasio gampang!!!
        </Text>

        <Button colorScheme="primary" as={RouterLink} to="/about" mb={4}>
          Learn More About Me
        </Button>

        <Text fontSize="md" mb={2}>
          📫 Reach out to me on:
        </Text>
        <Box>
          <Text>
            <strong>Email :</strong> klik yang di bawah aja
          </Text>
          <Text>
            <strong>LinkedIn :</strong>{" "}
            <a href="https://www.linkedin.com/in/ahmad-rizal-baehaqi-741863310/">
              cek bos
            </a>
          </Text>
          <Text>
            <strong>GitHub :</strong>{" "}
            <a href="https://github.com/Arizalb">sini cek juga</a>
          </Text>
        </Box>

        <Text fontSize="md" mt={4}>
          📜 Latest Blog Post:
        </Text>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Building Scalable Web Applications
          </Heading>
          <Text mb={4}>
            Explore my insights on building scalable web applications using
            modern technologies.{" "}
            <RouterLink to="/blog">Read more...</RouterLink>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
