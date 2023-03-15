import { FlatList, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { Container, Description, FilterContainer, Title } from "./styles";

import Vector from "../../assets/svgs/generation.svg";
import Vector1 from "../../assets/svgs/sort.svg";
import Vector2 from "../../assets/svgs/filter.svg";
import { Divider } from "../../components/Divider";
import { Input } from "../../components/Input";
import { PokemonCard } from "../../components/PokemonCard";
import { useState } from "react";

export const Home = () => {
  const [pokemons, setPokemons] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <Background>
      <Container>
        <FilterContainer>
          <Vector fill={"yellow"} />
          <Vector1 />
          <Vector2 />
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
          renderItem={({ item }) => <PokemonCard />}
          contentContainerStyle={{ paddingBottom: 70, paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Divider top={30} />}
        />
      </Container>
    </Background>
  );
};
