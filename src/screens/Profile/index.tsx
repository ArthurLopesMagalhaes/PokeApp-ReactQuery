import { StatusBar } from "expo-status-bar";
import {
  Container,
  TopContent,
  TopContentLeft,
  Image,
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
import { TopTabs } from "../../routes/topTabs.routes";

import DotsPatternSvg from "../../assets/svgs/dots-pattern-big.svg";
import CircleSvg from "../../assets/svgs/Circle.svg";

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
        <DotsPatternSvg
          style={{ position: "absolute", right: 0, bottom: -30 }}
        />
        <TopContentLeft>
          <CircleSvg
            style={{ position: "absolute", bottom: 0, left: -10 }}
            scaleX={0.8}
            scaleY={0.8}
          />
          <Image source={Png} resizeMode="contain" />
        </TopContentLeft>

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
      <Divider top={-5} />
      {/* <BottomContent> */}
      <TopTabs />
      {/* </BottomContent> */}
    </Container>
  );
};
