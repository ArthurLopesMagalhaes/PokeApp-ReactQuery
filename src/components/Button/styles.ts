import styled from "styled-components/native";

interface IButtonStyles {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<IButtonStyles>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.backgroundTypePsychic
      : props.theme.colors.backgroundDefaultInput};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60px;
`;
export const Label = styled.Text<IButtonStyles>`
  color: ${(props) =>
    props.selected
      ? props.theme.colors.textWhite
      : props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
