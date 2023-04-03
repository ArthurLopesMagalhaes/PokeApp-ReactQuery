import { SvgProps } from "react-native-svg";
import { Container, IIconStyles } from "./styles";

import { useTheme } from "styled-components";
import { IPokemonTypes, pokemonTypes } from "../../utils/pokemonTypes";

interface IIcon {
  icon: React.FC<SvgProps>;
  item: IPokemonTypes;
  selected: boolean;
  onPress: () => void;
}

export const Icons = ({ icon: Icon, item, selected, onPress }: IIcon) => {
  const theme = useTheme();

  return (
    <Container
      style={selected && { elevation: 7 }}
      activeOpacity={0.75}
      onPress={onPress}
      backgroundColor={selected ? item.bgColor : theme.colors.backgroundWhite}
    >
      <Icon color={selected ? theme.colors.backgroundWhite : item.bgColor} />
    </Container>
  );
};
