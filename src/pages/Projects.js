import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import cbtImg from "../assets/imageCBT.png";
import equranImg from "../assets/imageQuran.png";
import portImg from "../assets/image.png";

const projects = [
  {
    title: "CBT App",
    description: "Aplikasi untuk ujian online berbasis komputer",
    imageUrl: cbtImg,
    projectUrl: "https://ontest.netlify.app",
  },
  {
    title: "eQuran",
    description: "A comprehensive online Quran application.",
    imageUrl: equranImg,
    projectUrl: "https://equran-bae.netlify.app/",
  },
  {
    title: "simple porto",
    description: "Contoh portofolio simpel menggunakan Html CSS + Bootstrap",
    imageUrl: portImg,
    projectUrl: "https://mysimpleport.netlify.app",
  },
];

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = React.useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box p={4} minH={"100vh"}>
      <Heading as="h2" size="xl" mb={4}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {projects.map((project, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Flex direction="column" align="center" justify="space-between">
              <Image
                src={project.imageUrl}
                alt={project.title}
                boxSize="300px"
                objectFit="cover"
              />
              <Box p={4} textAlign="center">
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text mb={2} height="70px" overflow="hidden">
                  {project.description}
                </Text>
                <Flex justifyContent="center" mt="auto">
                  <Button
                    colorScheme="primary"
                    onClick={() => openModal(project)}
                  >
                    Learn More
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center">
              <Image
                src={selectedProject?.imageUrl}
                alt={selectedProject?.title}
                boxSize="300px"
                objectFit="cover"
                mb={4}
              />
              <Text>{selectedProject?.description}</Text>
              {selectedProject?.projectUrl && (
                <Button
                  as="a"
                  href={selectedProject.projectUrl}
                  target="_blank"
                  colorScheme="primary"
                  mt={4}
                >
                  Visit Project
                </Button>
              )}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Projects;
