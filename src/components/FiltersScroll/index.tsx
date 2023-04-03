import { Icons } from "../Icons";
import { Container, FiltersTitle } from "./styles";

import { FlatList } from "react-native-gesture-handler";
import { IPokemonTypes, pokemonTypes } from "../../utils/pokemonTypes";
import { Divider } from "../Divider";

interface IFilterScroll {
  label: string;
  data: IPokemonTypes[];
  selecteds: string[];
  onIconPress: (payload: string) => void;
}

export const FiltersScroll = ({
  label,
  data,
  selecteds,
  onIconPress,
}: IFilterScroll) => {
  return (
    <Container>
      <FiltersTitle>{label}</FiltersTitle>
      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        horizontal
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider right={10} />}
        renderItem={({ item }) => (
          <Icons
            icon={item.icon}
            selected={selecteds?.includes(item.type)}
            item={item}
            onPress={() => onIconPress(item.type)}
          />
        )}
      />
    </Container>
  );
};
