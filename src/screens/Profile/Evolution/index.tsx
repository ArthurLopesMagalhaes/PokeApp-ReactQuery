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
import { EvolutionItem } from "./components/EvolutionItem";

export const Evolution = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TableTitle>Evolution Chart</TableTitle>
      <EvolutionItem />
      <EvolutionItem />
    </ScrollView>
  );
};
