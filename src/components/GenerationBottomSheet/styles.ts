import { StyleSheet } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { theme } from "../../theme/global";

export const Container = styled.View`
  flex: 1;
  padding-left: 40px;
  padding-top: 15px;
  padding-right: 40px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textBlack};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.textGray};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;

export const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: theme.colors.backgroundWhite,
    borderRadius: 30,
  },
  indicator: {
    position: "absolute",
    top: -12,
    height: 6,
    width: 80,
    borderRadius: 3,
    backgroundColor: theme.colors.backgroundWhite,
  },
});
