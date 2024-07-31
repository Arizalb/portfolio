import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    imageUrl: "https://via.placeholder.com/300",
  },
  // Tambahkan proyek lainnya di sini
];

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = React.useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box p={4}>
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
            <Image src={project.imageUrl} alt={project.title} />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={2}>{project.description}</Text>
              <Button colorScheme="primary" onClick={() => openModal(project)}>
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={selectedProject?.imageUrl}
              alt={selectedProject?.title}
              mb={4}
            />
            <Text>{selectedProject?.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="primary" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Projects;
