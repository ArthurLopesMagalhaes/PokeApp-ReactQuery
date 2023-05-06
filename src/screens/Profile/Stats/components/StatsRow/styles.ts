import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.textBlack};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.medium};
  width: 50px;
`;

export const Value = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  text-align: right;
  width: 30px;
`;

export const Total = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  text-align: right;
  width: 40px;
`;

export const BarWrapper = styled.View`
  flex: 1;
`;

export const Bar = styled.View`
  background-color: red;
  height: 4px;
  border-radius: 2px;
  width: 100%;
`;

export const LabelTotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const MinMaxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const MinMaxLabel = styled.Text`
  color: ${(props) => props.theme.colors.textBlack};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.medium};
`;
