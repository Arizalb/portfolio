import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Link,
  VStack,
  IconButton,
  CloseButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FiHome, FiUser, FiBriefcase, FiMail, FiMusic } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";

const SidebarContent = ({ onClose }) => (
  <VStack spacing={4} align="start" w="full">
    <Heading as="h1" size="lg" mb={4}>
      RzlBaihqi
    </Heading>
    {[
      { to: "/", label: "Home", icon: FiHome },
      { to: "/about", label: "About", icon: FiUser },
      { to: "/projects", label: "Projects", icon: FiBriefcase },
      { to: "/hobbies", label: "Hobbies", icon: FiMusic },
      { to: "/contact", label: "Contact", icon: FiMail },
    ].map((item) => (
      <Link
        as={RouterLink}
        to={item.to}
        onClick={onClose}
        key={item.label}
        _activeLink={{ bg: "primary.800", color: "white", borderRadius: "md" }}
        py={2}
        px={3}
        w="full"
      >
        <Flex align="center">
          <item.icon />
          <Box ml={2}>{item.label}</Box>
        </Flex>
      </Link>
    ))}
  </VStack>
);

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        pos="fixed"
        w={{ base: "full", md: 60 }}
        h="full"
        bg="primary.900"
        color="white"
        p={4}
      >
        <SidebarContent onClose={onClose} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        display={{ base: "block", md: "none" }}
      >
        <DrawerOverlay>
          <DrawerContent bg="primary.900" color="white" p={4}>
            <CloseButton onClick={onClose} alignSelf="flex-end" />
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        size="lg"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        pos="fixed"
        top="1rem"
        left="1rem"
        zIndex="1000"
      />
    </>
  );
};

export default Sidebar;
