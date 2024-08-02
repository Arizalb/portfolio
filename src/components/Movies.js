import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const FavoriteMovies = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const iframes = document.querySelectorAll("iframe");
    if (iframes.length > 0) {
      iframes.forEach((iframe) => {
        iframe.onload = () => {
          setIsLoaded(true);
        };
      });
    }
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        My Favorite Movies
      </Heading>

      {isLoaded ? (
        <>
          <Box mb={6}>
            <Text fontSize="xl" mb={2}>
              Oppenheimer
            </Text>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bK6ldnjE3Y0"
              title="Oppenheimer Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          <Box mb={6}>
            <Text fontSize="xl" mb={2}>
              Dune: Part Two
            </Text>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Way9Dexny3w"
              title="Dune: Part Two Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          <Box mb={6}>
            <Text fontSize="xl" mb={2}>
              Avengers: Endgame
            </Text>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/TcMBFSGVi1c"
              title="Avengers: Endgame Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </>
      ) : (
        <>
          <Box mb={6}>
            <Text fontSize="xl" mb={2}>
              Oppenheimer
            </Text>
            <Skeleton height="315" mt={2}>
              <SkeletonCircle size="100%" />
              <SkeletonText noOfLines={3} mt={2} />
            </Skeleton>
          </Box>

          <Box mb={6}>
            <Text fontSize="xl" mb={2}>
              Dune: Part Two
            </Text>
            <Skeleton height="315" mt={2}>
              <SkeletonCircle size="100%" />
              <SkeletonText noOfLines={3} mt={2} />
            </Skeleton>
          </Box>

          <Box mb={6}>
            <Text fontSize="xl" mb={2}>
              Avengers: Endgame
            </Text>
            <Skeleton height="315" mt={2}>
              <SkeletonCircle size="100%" />
              <SkeletonText noOfLines={3} mt={2} />
            </Skeleton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default FavoriteMovies;
