import { StatusBar } from "expo-status-bar";
import {
  Container,
  TopContent,
  TopContentLeft,
  TopContentRight,
  PokemonNumber,
  PokemonName,
  BadgeContainer,
  BottomContent,
  Header,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import Png from "../../assets/pngs/pokemon.png";
import BugSvg from "../../assets/svgs/type-bug.svg";

import { Divider } from "../../components/Divider";
import { Badge } from "../../components/Badge";
import { useTheme } from "styled-components";
import { About } from "./About";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        animated
        style="light"
        backgroundColor={theme.colors.backgroundTypeGrass}
      />
      <Header>
        <Feather
          name="arrow-left"
          color={"white"}
          size={25}
          onPress={() => navigation.goBack()}
        />
      </Header>
      <Divider top={30} />
      <TopContent>
        <TopContentLeft source={Png} resizeMode="contain" />

        <TopContentRight>
          <PokemonNumber>#001</PokemonNumber>
          <PokemonName>Bulbasaur</PokemonName>
          <BadgeContainer>
            <Badge
              icon={BugSvg}
              label="Grass"
              stylesProps={{ backgroundColor: "#62B957" }}
            />
            <Badge
              icon={BugSvg}
              label="Grass"
              stylesProps={{ backgroundColor: "#62B957" }}
            />
          </BadgeContainer>
        </TopContentRight>
      </TopContent>
      <Divider top={45} />
      <BottomContent>
        <About />
      </BottomContent>
    </Container>
  );
};
