import { Container, Image, Text } from "./styles";

import { Divider } from "../Divider";
import { StyleProp, ViewStyle } from "react-native";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

import DotsPatternSvg from "../../assets/svgs/dots-pattern.svg";
import PokeballSvg from "../../assets/svgs/pokeball.svg";

interface IGeneration {
  selected: boolean;
  onPress: () => void;
  data: {
    image: ImageSourcePropType;
    text: string;
  };
  styleProps: StyleProp<ViewStyle>;
}

export const Generations = ({
  styleProps,
  selected,
  onPress,
  data,
}: IGeneration) => {
  return (
    <Container style={styleProps} selected={selected} onPress={onPress}>
      <DotsPatternSvg style={{ position: "absolute", left: 15, top: 10 }} />
      <PokeballSvg
        style={{ position: "absolute", right: 0, bottom: -50 }}
        width={90}
      />
      <Image source={data.image} resizeMode="contain" />
      <Divider top={15} />
      <Text selected={selected}>{data.text}</Text>
    </Container>
  );
};
