import styled from "styled-components/native";

export const ScrollView = styled.ScrollView``;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
export const TableTitle = styled.Text`
  color: ${(props) => props.theme.colors.typeGrass};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const Table = styled.View`
  flex: 1;
`;

export const TableRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LeftLabel = styled.Text`
  color: ${(props) => props.theme.colors.textBlack};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.medium};
  width: 90px;
`;

export const RightLabel = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  flex: 1;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;
