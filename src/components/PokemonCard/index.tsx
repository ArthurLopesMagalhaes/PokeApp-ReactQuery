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
import { Image, ImageSourcePropType } from "react-native";

import DotsPatternSvg from "../../assets/svgs/dots-pattern.svg";
import PokeballSvg from "../../assets/svgs/pokeball.svg";
import BugSvg from "../../assets/svgs/type-bug.svg";

export interface PokemonCardData {
  number: string;
  name: string;
  types: string[];
  img: ImageSourcePropType;
}

interface IPokemonCard {
  data: PokemonCardData;
  onPress: () => void;
}

export const PokemonCard = ({ data, onPress }: IPokemonCard) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <DotsPatternSvg style={{ position: "absolute", left: 80, top: 10 }} />
      <PokeballSvg
        style={{ position: "absolute", right: 0, top: 10 }}
        scaleX={1.2}
        scaleY={1.2}
      />
      <InfosContainer>
        <Number>#{data.number}</Number>
        <PokemonName>{data.name}</PokemonName>
        <BadgesContainer>
          <Badge
            icon={BugSvg}
            label="Grass"
            stylesProps={{ backgroundColor: "#62B957" }}
          />
        </BadgesContainer>
      </InfosContainer>
      <ImgContainer>
        <Image source={data.img} />
      </ImgContainer>
    </Container>
  );
};
