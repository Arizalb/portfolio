import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Link,
  VStack,
  useColorMode,
  useColorModeValue,
  Switch,
  Collapse,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { FiHome, FiUser, FiBriefcase, FiMail, FiMusic } from "react-icons/fi";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const SidebarContent = ({ isOpen }) => (
  <VStack
    spacing={{ base: 8, md: 4 }} // Adjust spacing based on screen size
    align="start" // Align to the left on desktop
    w="full"
  >
    {[
      { to: "/", label: "Home", icon: FiHome },
      { to: "/about", label: "About", icon: FiUser },
      { to: "/projects", label: "Projects", icon: FiBriefcase },
      { to: "/hobbies", label: "Hobbies", icon: FiMusic },
      { to: "/contact", label: "Contact", icon: FiMail },
    ].map((item) => (
      <Tooltip
        label={item.label}
        key={item.label}
        placement="right"
        isDisabled={isOpen}
      >
        <Link
          as={RouterLink}
          to={item.to}
          _activeLink={{
            bg: "primary.800",
            color: "white",
            padding: "auto",
            borderRadius: "24px 0 24px 0",
            cursor: "pointer",
          }}
          py={"10px"}
          px={{ base: "6px", md: "8px" }} // Adjust padding based on screen size
          w="full"
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }} // Centered on mobile, left-aligned on desktop
          transform={{ base: "rotate(-90deg)", md: "none" }}
          position="relative" // Required for indicator positioning
        >
          <Flex align="center">
            <Box
              as={item.icon}
              boxSize="5"
              display={{ base: "none", md: "block" }} // Hide icons on mobile
            />
            <Collapse in={isOpen} display={{ base: "none", md: "block" }}>
              <Box ml={2}>{item.label}</Box>
            </Collapse>
          </Flex>
        </Link>
      </Tooltip>
    ))}
  </VStack>
);

const Sidebar = () => {
  const [isSidebarOpen] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("primary.900", "gray.900");
  const color = useColorModeValue("white", "gray.200");

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
        <Heading as="h1" size="md" flex="1" textAlign="left">
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

      {/* Sidebar for All Screens */}
      <Box
        pos="fixed"
        left="0"
        top="16"
        w={isSidebarOpen ? { base: 16, md: 60 } : 16} // Slim sidebar on mobile
        h="full"
        bg={bg}
        color={color}
        p={4}
        transition="width 0.3s"
      >
        <SidebarContent isOpen={isSidebarOpen} />
      </Box>

      {/* Page Content Wrapper */}
      <Box
        ml={isSidebarOpen ? { base: 16, md: 60 } : 16} // Adjust content margin for slim sidebar on mobile
        mt="16"
        p={4}
        transition="margin-left 0.3s"
      >
        {/* Your page content goes here */}
      </Box>
    </>
  );
};

export default Sidebar;
