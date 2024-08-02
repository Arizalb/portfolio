import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Link,
  VStack,
  IconButton,
  CloseButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
  useColorModeValue,
  Switch,
  Collapse,
  Heading,
} from "@chakra-ui/react";
import { FiHome, FiUser, FiBriefcase, FiMail, FiMusic } from "react-icons/fi";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const SidebarContent = ({ onClose, isOpen }) => (
  <VStack spacing={4} align="start" w="full">
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
          <Collapse in={isOpen}>
            <Box ml={2}>{item.label}</Box>
          </Collapse>
        </Flex>
      </Link>
    ))}
  </VStack>
);

const Sidebar = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("primary.900", "gray.800");
  const color = useColorModeValue("white", "gray.200");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Box
        display="flex"
        pos="fixed"
        w="full"
        h="16"
        bg={bg}
        color={color}
        alignItems="center"
        justifyContent="space-between"
        px={4}
        zIndex="1001"
      >
        <IconButton
          aria-label="Toggle sidebar"
          icon={<HamburgerIcon />}
          size="sm"
          onClick={toggleSidebar}
          display={{ base: "none", md: "inline-flex" }}
        />
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          size="sm"
          onClick={onDrawerOpen}
          display={{ base: "inline-flex", md: "none" }}
        />
        <Heading as="h1" size="md" flex="1" textAlign="center">
          RzlBaihaqi
        </Heading>
        <Flex align="center">
          <SunIcon />
          <Switch
            mx={2}
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <MoonIcon />
        </Flex>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        pos="fixed"
        left="0"
        top="16"
        w={isSidebarOpen ? 60 : 16}
        h="full"
        bg={bg}
        color={color}
        p={4}
        transition="width 0.3s"
      >
        <SidebarContent onClose={() => {}} isOpen={isSidebarOpen} />
      </Box>
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        display={{ base: "block", md: "none" }}
      >
        <DrawerOverlay>
          <DrawerContent bg={bg} color={color} p={4}>
            <CloseButton onClick={onDrawerClose} alignSelf="flex-end" />
            <SidebarContent onClose={onDrawerClose} isOpen />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box
        ml={{ base: 0, md: isSidebarOpen ? 60 : 16 }}
        mt="16"
        p={4}
        transition="margin-left 0.3s"
      >
        {/* Konten halaman Anda di sini */}
      </Box>
    </>
  );
};

export default Sidebar;
