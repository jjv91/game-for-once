import { Card, CardBody, SkeletonText, Skeleton } from "@chakra-ui/react";
import React from "react";

const GameCardSqueleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSqueleton;
