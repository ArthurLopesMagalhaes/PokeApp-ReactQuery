import styled from "styled-components/native";

export const Container = styled.View``;
export const FiltersTitle = styled.Text`
  color: ${(props) => props.theme.colors.textBlack};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;
