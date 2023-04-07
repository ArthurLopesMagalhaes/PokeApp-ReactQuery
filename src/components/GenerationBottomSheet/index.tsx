import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, useState } from "react";

import { FlatList } from "react-native-gesture-handler";
import { pokemonGenerations } from "../../utils/pokemonGenerations";

import { Divider } from "../Divider";

import { Generations } from "../Generations";
import { Container, Description, styles, Title } from "./styles";

export const GenerationBottomSheet = forwardRef<BottomSheet>((props, ref) => {
  const snapPoints = ["45%", "90%"];

  const [selecteds, setSelecteds] = useState([0, 2, 5]);

  const handlePressGeneration = (index: number) => {
    if (selecteds.includes(index)) {
      setSelecteds((prevState) => {
        return prevState.filter((item) => item !== index);
      });
    } else {
      setSelecteds((prevState) => [...prevState, index]);
    }
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      backgroundStyle={styles.backgroundStyle}
      enablePanDownToClose
      handleIndicatorStyle={styles.indicator}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="close"
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
    >
      <Container>
        <Title>Generation</Title>
        <Description>
          Use search for generations to explore your Pokémon!
        </Description>
        <Divider top={35} />
        <FlatList
          data={pokemonGenerations}
          keyExtractor={(item) => item.generation}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Divider top={14} />}
          renderItem={({ item, index }) => (
            <Generations
              selected={selecteds.includes(index)}
              onPress={() => handlePressGeneration(index)}
              data={item}
              styleProps={
                index % 2 === 0
                  ? {
                      marginRight: 7,
                    }
                  : {
                      marginLeft: 7,
                    }
              }
            />
          )}
        />
      </Container>
    </BottomSheet>
  );
});
