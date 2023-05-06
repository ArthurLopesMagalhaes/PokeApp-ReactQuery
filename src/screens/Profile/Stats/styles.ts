import styled from "styled-components/native";

export const ScrollView = styled.ScrollView``;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
export const TableTitle = styled.Text`
  color: ${(props) => props.theme.colors.typeGrass};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  row-gap: 20px;
`;
