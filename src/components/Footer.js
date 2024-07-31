import React from "react";
import { Box, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="primary.900" color="white" py={4}>
      <Flex alignItems="center" justifyContent="center">
        <Text mr={2}>© 2024 RzlBaihaqi. All rights reserved.</Text>
        <Link href="https://github.com/rzlbaihaqi" isExternal>
          <IconButton
            icon={<FaGithub />}
            isRound="true"
            size="lg"
            colorScheme="primary"
            mr={2}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ahmad-rizal-baehaqi-741863310/"
          isExternal
        >
          <IconButton
            icon={<FaLinkedin />}
            isRound="true"
            size="lg"
            colorScheme="primary"
            mr={2}
          />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <IconButton
            icon={<FaTwitter />}
            isRound="true"
            size="lg"
            colorScheme="primary"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
