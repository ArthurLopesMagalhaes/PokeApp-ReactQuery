import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 40px 40px 30px 40px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textBlack};
  font-size: ${(props) => props.theme.fontSize.xxl}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
