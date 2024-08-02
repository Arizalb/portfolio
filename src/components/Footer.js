import React from "react";
import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("blue.100", "blue.900")}
      color={useColorModeValue("black.700", "white.100")}
      py={4}
      borderRadius={"12px 12px 0 0"}
    >
      <Container maxW="1200px" mx="auto" px={4}>
        <Flex justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="bold">
            Portfolio
          </Text>
          <Flex align="center">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              _hover={{
                color: "blue.500",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link
              href="https://www.instagram.com/rzlbaihaqi"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              _hover={{
                color: "pink.500",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              _hover={{
                color: "blue.500",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/Ahmad-Rizal-Baehaqi"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              _hover={{
                color: "blue.500",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
            <Link
              href="https://github.com/Arizalb"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              _hover={{
                color: "gray.500",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
          </Flex>
        </Flex>
        <Text fontSize="sm" mt={2}>
          &copy; {new Date().getFullYear()} Ahmad Rizal Baehaqi. All rights
          reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
