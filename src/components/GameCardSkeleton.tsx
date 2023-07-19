import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Box borderRadius={10} overflow="hidden" bg="gray.600" p="6">
      <Skeleton height="200px" />
      <Box mt="6">
        <SkeletonText mt="4" noOfLines={1} spacing="4" />
      </Box>
    </Box>
  );
};

export default GameCardSkeleton;
