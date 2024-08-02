import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const Music = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.onload = () => {
        setIsLoaded(true);
      };
    }
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        My Music Playlist
      </Heading>

      {isLoaded ? (
        <>
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
        </>
      ) : (
        <>
          <Skeleton height="400px" mt={4}>
            <SkeletonCircle size="100%" />
            <SkeletonText noOfLines={3} mt={2} />
          </Skeleton>
        </>
      )}
    </Box>
  );
};

export default Music;
