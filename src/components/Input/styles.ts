import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 10px;
  padding: 20px 10px 20px 25px;
  background-color: ${(props) => props.theme.colors.backgroundDefaultInput};
  flex-direction: row;
  align-items: center;
`;

export const InputField = styled.TextInput.attrs((props) => ({
  placeholder: "What Pokémon are you looking for?",
  placeholderTextColor: props.theme.colors.textGray,
}))`
  margin-left: 10px;
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  flex: 1;
`;
