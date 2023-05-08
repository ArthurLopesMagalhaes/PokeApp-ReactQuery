import {
  ArrowAndLevel,
  Container,
  LevelText,
  PokemonContainer,
  PokemonName,
  PokemonNumber,
  Image,
} from "./styles";

import ArrowRightSvg from "../../../../../assets/svgs/front.svg";
import PokemonPng from "../../../../../assets/pngs/pokemon.png";

import { useTheme } from "styled-components";

export const EvolutionItem = () => {
  const theme = useTheme();

  return (
    <Container>
      <PokemonContainer>
        <Image source={PokemonPng} />
        <PokemonNumber>#001</PokemonNumber>
        <PokemonName>Bulbasaur</PokemonName>
      </PokemonContainer>
      <ArrowAndLevel>
        <ArrowRightSvg color={theme.colors.textGray} />
        <LevelText>(Level 16)</LevelText>
      </ArrowAndLevel>
      <PokemonContainer>
        <Image source={PokemonPng} />
        <PokemonNumber>#001</PokemonNumber>
        <PokemonName>Bulbasaur</PokemonName>
      </PokemonContainer>
    </Container>
  );
};
