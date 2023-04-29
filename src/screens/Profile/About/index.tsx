import { Text } from "react-native";
import {
  Description,
  LeftLabel,
  RightLabel,
  ScrollView,
  Table,
  TableRow,
  TableTitle,
} from "./styles";
import { Divider } from "../../../components/Divider";
import { BadgeContainer } from "../styles";
import { Badge } from "../../../components/Badge";

import Svg from "../../../assets/svgs/type-bug.svg";

export const About = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Description>
        Bulbasaur can be seen napping in bright sunlight. There is a seed on its
        back. By soaking up the sun's rays, the seed grows progressively larger.
      </Description>
      <Divider top={30} />
      <TableTitle>Pokedéx Data</TableTitle>
      <Table>
        <TableRow>
          <LeftLabel>Species</LeftLabel>
          <RightLabel>Seed Pokémon</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Height</LeftLabel>
          <RightLabel>0.7m (2′04″)</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Weight</LeftLabel>
          <RightLabel>6.9kg (15.2 lbs)</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Abilities</LeftLabel>
          <RightLabel>1. Overgrow</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Weaknesses</LeftLabel>
          <BadgeContainer>
            <Badge icon={Svg} stylesProps={{ backgroundColor: "red" }} />
            <Badge icon={Svg} stylesProps={{ backgroundColor: "red" }} />
            <Badge icon={Svg} stylesProps={{ backgroundColor: "red" }} />
          </BadgeContainer>
        </TableRow>
        <Divider top={10} />
      </Table>
      <Divider top={20} />
      <TableTitle>Training</TableTitle>
      <Table>
        <TableRow>
          <LeftLabel>EV Yield</LeftLabel>
          <RightLabel>1 Special Attack</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Catch Rate</LeftLabel>
          <RightLabel>45 (5.9% with PokeBall, full HP)</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Base Friendship</LeftLabel>
          <RightLabel>70 (normal)</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Base Exp</LeftLabel>
          <RightLabel>64</RightLabel>
        </TableRow>
        <TableRow>
          <LeftLabel>Growth Rate</LeftLabel>
          <RightLabel>Medium Slow</RightLabel>
        </TableRow>
        <Divider top={10} />

        <Divider top={10} />
      </Table>
      <Divider top={20} />
      <TableTitle>Breeding</TableTitle>
      <Table>
        <TableRow>
          <LeftLabel>Gender</LeftLabel>
          <RightLabel>Seed Pokémon</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Egg Groups</LeftLabel>
          <RightLabel>0.7m (2′04″)</RightLabel>
        </TableRow>
        <Divider top={10} />
        <TableRow>
          <LeftLabel>Abilities</LeftLabel>
          <RightLabel>1. Overgrow</RightLabel>
        </TableRow>
        <Divider top={10} />
      </Table>
      <Divider top={20} />
      <TableTitle>Location</TableTitle>
      <Table>
        <TableRow>
          <LeftLabel>001</LeftLabel>
          <RightLabel>(Red/Blue/Yellow)</RightLabel>
        </TableRow>
        <Divider top={10} />

        <Divider top={10} />
      </Table>
    </ScrollView>
  );
};
