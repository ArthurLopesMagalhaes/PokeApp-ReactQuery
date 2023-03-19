import styled from "styled-components/native";

interface IStyle {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<IStyle>`
  height: 129px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.typePsychic
      : props.theme.colors.backgroundDefaultInput};
`;

export const Image = styled.Image``;

export const Text = styled.Text<IStyle>`
  color: ${(props) =>
    props.selected
      ? props.theme.colors.textWhite
      : props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
