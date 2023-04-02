import { FlatList } from "react-native";
import { Background } from "../../components/Background";
import { Container, Description, FilterContainer, Title } from "./styles";

import GenerationSvg from "../../assets/svgs/generation.svg";
import SortSvg from "../../assets/svgs/sort.svg";
import FilterSvg from "../../assets/svgs/filter.svg";
import { Divider } from "../../components/Divider";
import { Input } from "../../components/Input";
import { PokemonCard } from "../../components/PokemonCard";
import { useRef, useState } from "react";
import { FilterBottomSheet } from "../../components/FilterBottomSheet";
import { useTheme } from "styled-components";
import BottomSheet from "@gorhom/bottom-sheet";
import { GenerationBottomSheet } from "../../components/GenerationBottomSheet";
import { SortBottomSheet } from "../../components/SortBottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export const Home = () => {
  const theme = useTheme();
  const generationSheetRef = useRef<BottomSheet>(null);
  const sortSheetRef = useRef<BottomSheet>(null);
  const filterSheetRef = useRef<BottomSheet>(null);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.snapToIndex(0);
  };

  const [pokemons, setPokemons] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <Background>
      <Container>
        <FilterContainer>
          <GenerationSvg
            color={theme.colors.textBlack}
            onPress={() => openModal(generationSheetRef)}
          />
          <SortSvg
            color={theme.colors.textBlack}
            onPress={() => openModal(sortSheetRef)}
          />
          <FilterSvg
            color={theme.colors.textBlack}
            onPress={() => openModal(filterSheetRef)}
          />
        </FilterContainer>

        <Divider top={35} />

        <Title>Pokédex</Title>

        <Divider top={10} />

        <Description>
          Search for Pokémon by name or using the National Pokédex number.
        </Description>

        <Divider top={25} />

        <Input />

        <Divider top={25} />

        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={{ paddingBottom: 70, paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Divider top={30} />}
          renderItem={({ item }) => <PokemonCard onPress={() => null} />}
        />
      </Container>
      <GenerationBottomSheet ref={generationSheetRef} />
      <SortBottomSheet ref={sortSheetRef} />
      <FilterBottomSheet ref={filterSheetRef} />
    </Background>
  );
};
