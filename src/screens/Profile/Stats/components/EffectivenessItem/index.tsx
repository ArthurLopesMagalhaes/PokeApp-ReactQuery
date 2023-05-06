import styled from "styled-components/native";
import { Container, Value } from "./styles";
import { Badge } from "../../../../../components/Badge";

import BugSvg from "../../../../../assets/svgs/type-bug.svg";

export const EffectivenessItem = () => {
  return (
    <Container>
      <Badge icon={BugSvg} stylesProps={{ backgroundColor: "green" }} />
      <Value>1/2</Value>
    </Container>
  );
};
