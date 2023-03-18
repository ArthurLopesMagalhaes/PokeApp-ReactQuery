import { Badge } from "../Badge";
import {
  BadgesContainer,
  Container,
  ImgContainer,
  InfosContainer,
  Number,
  PokemonName,
} from "./styles";

import PokemonPng from "../../assets/pngs/pokemon.png";
import { Image } from "react-native";

import DotesPattern from "../../assets/svgs/dots-pattern.svg";
import PokeballSvg from "../../assets/svgs/pokeball.svg";
import BugSvg from "../../assets/svgs/type-bug.svg";

interface IPokemonCard {
  onPress: () => void;
}

export const PokemonCard = ({ onPress }: IPokemonCard) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <DotesPattern style={{ position: "absolute", left: 80, top: 10 }} />
      <PokeballSvg
        style={{ position: "absolute", right: 0, top: 10 }}
        scaleX={1.2}
        scaleY={1.2}
      />
      <InfosContainer>
        <Number>#001</Number>
        <PokemonName>Bulbasaur</PokemonName>
        <BadgesContainer>
          <Badge
            icon={BugSvg}
            label="Grass"
            stylesProps={{ backgroundColor: "#62B957" }}
          />
        </BadgesContainer>
      </InfosContainer>
      <ImgContainer>
        <Image source={PokemonPng} />
      </ImgContainer>
    </Container>
  );
};
