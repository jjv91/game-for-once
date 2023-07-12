import React from "react";
import { Game } from "../hooks/useGames";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList"; // assuming the file is in the same directory

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box borderWidth="1px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Box p="6">
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Box>
    </Box>
  );
};

export default GameCard;
