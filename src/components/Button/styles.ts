import styled from "styled-components/native";

interface IButtonStyles {
  bgColor?: string;
  textColor?: string;
}

export const Container = styled.TouchableOpacity<IButtonStyles>`
  background-color: ${(props) => props.bgColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60px;
`;
export const Label = styled.Text<IButtonStyles>`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
