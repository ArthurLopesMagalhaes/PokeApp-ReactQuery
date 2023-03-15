import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.backgroundTypeGrass};
  border-radius: 10px;
  padding: 20px;
`;
export const InfosContainer = styled.View``;

export const Number = styled.Text`
  color: ${(props) => props.theme.colors.textNumber};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const PokemonName = styled.Text`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  margin-top: -10px;
  margin-bottom: -5px;
`;

export const BadgesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  /* width: 40%; */
  overflow: hidden;
`;
export const ImgContainer = styled.View`
  position: absolute;
  right: 10px;
  top: -25px;
`;
