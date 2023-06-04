import styled from "styled-components/native";

export interface IBadgeStyle {
  backgroundColor: string;
  label?: boolean;
}

export const Container = styled.View<IBadgeStyle>`
  background-color: ${(props) => props.backgroundColor};
  padding: 5px;
  gap: ${(props) => (props.label ? "5px" : 0)};
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
