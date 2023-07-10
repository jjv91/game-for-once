import React from "react";
import { Game } from "../hooks/useGames";
import { Box, Image, Heading } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box borderWidth="1px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Box p="6">
        <Heading fontSize="2xl">{game.name}</Heading>
      </Box>
    </Box>
  );
};

export default GameCard;
