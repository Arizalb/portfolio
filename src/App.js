import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Hobbies from "./pages/Hobbies";
import { Box, Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <Router>
      <Flex minH="100vh">
        <Sidebar />
        <Box
          ml={{ base: 0, md: 60 }}
          p={{ base: 4, md: 8 }}
          pt={{ base: 16, md: 8 }}
          flex="1"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </Box>
      </Flex>
      <Footer />
    </Router>
  );
};

export default App;
