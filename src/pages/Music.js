import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Music = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        My Music Playlist
      </Heading>
      <Box>
        <iframe
          title="my favorite music"
          style={{ borderRadius: "20px" }}
          src="https://open.spotify.com/embed/playlist/4W518wlC7mOWNLO4YYGIJr?utm_source=generator&theme=0"
          width="100%"
          height="400px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default Music;
