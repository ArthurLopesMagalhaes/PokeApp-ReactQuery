import { Container } from "./styles";
import PokeballPng from "../../assets/pngs/Pokeball.png";
import { Dimensions } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

interface IBackground {
  children?: React.ReactNode;
}

export const Background = ({ children }: IBackground) => {
  return (
    <Container
      source={PokeballPng}
      imageStyle={{
        resizeMode: "contain",
        position: "absolute",
        top: -SCREEN_HEIGHT / 1.43,
      }}
    >
      {children}
    </Container>
  );
};
