import { Divider } from "../../../components/Divider";
import { EffectivenessItem } from "./components/EffectivenessItem";
import { StatsRow, StatsRowTotal } from "./components/StatsRow";
import { Description, Row, ScrollView, TableTitle } from "./styles";

export const Stats = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TableTitle>Base Stats</TableTitle>
      <StatsRow label="HP" value={45} />
      <StatsRow label="Attack" value={23} />
      <StatsRow label="Defense" value={123} />
      <StatsRow label="Sp. Atk" value={453} />
      <StatsRow label="Sp. Def" value={20} />
      <StatsRow label="Speed" value={0} />
      <StatsRowTotal />
      <Divider top={20} />
      <Description>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </Description>
      <Divider top={20} />
      <TableTitle>Type Defense</TableTitle>
      <Divider top={20} />

      <Description>The effectiveness of each type on Bulbasaur.</Description>
      <Divider top={20} />
      <Row>
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
        <EffectivenessItem />
      </Row>
    </ScrollView>
  );
};
