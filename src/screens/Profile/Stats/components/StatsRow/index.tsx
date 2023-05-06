import React from "react";
import {
  Bar,
  BarWrapper,
  Container,
  Label,
  LabelTotalContainer,
  MinMaxContainer,
  MinMaxLabel,
  Total,
  Value,
} from "./styles";
import { Divider } from "../../../../../components/Divider";

interface IStatsRow {
  label: string;
  value: number;
}

export const StatsRow = ({ label, value }: IStatsRow) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <Value>{value}</Value>
        <BarWrapper>
          <Bar />
        </BarWrapper>
        <Value>34</Value>
        <Value>34</Value>
      </Container>
    </>
  );
};

export const StatsRowTotal = () => {
  return (
    <Container>
      <LabelTotalContainer>
        <Label>Total</Label>
        <Total>454</Total>
      </LabelTotalContainer>
      <MinMaxContainer>
        <MinMaxLabel>Min</MinMaxLabel>
        <MinMaxLabel>Max</MinMaxLabel>
      </MinMaxContainer>
    </Container>
  );
};
