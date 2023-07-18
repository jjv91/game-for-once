import React from "react";
import { Game } from "../hooks/useGames";
import { Box, Image, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList"; // assuming the file is in the same directory
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden" bg="gray.600">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Box p="6">
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Box>
    </Box>
  );
};

export default GameCard;
