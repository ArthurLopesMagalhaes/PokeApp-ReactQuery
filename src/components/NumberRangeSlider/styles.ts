import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { theme } from "../../theme/global";

export const Container = styled.View``;

export const styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  sliderBack: {
    height: 4,
    backgroundColor: theme.colors.backgroundDefaultInput,
    borderRadius: 20,
  },
  sliderFront: {
    height: 4,
    backgroundColor: theme.colors.typePsychic,
    borderRadius: 20,
    width: "100%",
    position: "absolute",
  },
  thumb: {
    top: -7,
    left: 0,
    width: 20,
    height: 20,
    position: "absolute",
    backgroundColor: "white",
    borderColor: theme.colors.typePsychic,
    borderWidth: 5,
    borderRadius: 10,
  },
  label: {
    position: "absolute",
    top: 0,
    bottom: -60,
    alignSelf: "center",
    justifyContent: "center",
  },
  labelText: {
    color: theme.colors.textGray,
    padding: 5,
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    width: "100%",
    textAlign: "center",
  },
});
