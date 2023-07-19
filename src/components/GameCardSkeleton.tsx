import { Box, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Box width="300px" p="4" bg="gray.600" borderRadius="md">
      <Skeleton height="200px" />
      <Skeleton height="20px" my="10px" />
      <Skeleton height="20px" />
    </Box>
  );
};

export default GameCardSkeleton;
