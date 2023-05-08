import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundTypeGrass};
`;
export const Header = styled.View`
  padding: 40px 40px 0 40px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 0px 40px 0 40px;
`;

export const TopContentLeft = styled.View`
  width: 100px;
`;
export const Image = styled.Image`
  width: 100px;
`;

export const TopContentRight = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const PokemonNumber = styled.Text`
  color: ${(props) => props.theme.colors.textNumber};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const PokemonName = styled.Text`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: ${(props) => props.theme.fontSize.xxl}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  line-height: 35px;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const BottomContent = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px 40px;
`;
