import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Flex,
  keyframes,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";
import Hero from "../assets/profile.png";

// Keyframes for 3D effect
const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const Home = () => {
  return (
    <Box p={4}>
      <Stack spacing={4}>
        <Heading as="h4" size="lg" mb={4}>
          Welcome to My Portfolio
        </Heading>

        <Flex direction="column" align="center" py={"20"}>
          <Box
            borderRadius="full"
            boxSize="350px"
            overflow="hidden"
            mb={4}
            animation={`${rotate} 3s infinite linear`}
            transform="rotateY(0deg)"
            _hover={{
              animationPlayState: "paused",
            }}
          >
            <Image src={Hero} alt="it's me!" />
          </Box>
          <Heading as="h1" size="xl" mb={4}>
            Ahmad Rizal Baehaqi
          </Heading>
          <Box p={4}>
            <Box as="div" fontSize="xl" fontWeight="extrabold">
              <Text as="span">Saya sebagai </Text>
              <Text
                as="span"
                bgGradient="linear(to-l, #7928CA, #FFD987, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                style={{ fontFamily: "'JetBrains Mono', monospace" }} // Apply JetBrains Mono
              >
                <Typed
                  strings={[
                    "Web Back-End Developer",
                    "Web Front-End Developer",
                    "Editor",
                    "Photographer",
                    "Orang Biasa",
                    "Calon Suamimu",
                    "Calon Menantu Orang Tua mu",
                  ]}
                  typeSpeed={100}
                  backSpeed={20}
                  loop
                />
              </Text>
            </Box>
          </Box>
        </Flex>

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
