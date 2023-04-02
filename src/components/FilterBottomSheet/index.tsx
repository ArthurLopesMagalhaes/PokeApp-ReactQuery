import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, useReducer, useState } from "react";

import { ScrollView } from "react-native-gesture-handler";
import {
  ActionKind,
  filtersInitialState,
  filtersReducer,
} from "../../reducers/filtersReducer";

import { pokemonHeights } from "../../utils/pokemonHeights";
import { pokemonTypes } from "../../utils/pokemonTypes";
import { pokemonWeights } from "../../utils/pokemonWeights";

import { Divider } from "../Divider";
import { FiltersScroll } from "../FiltersScroll";

import { Description, styles, Title } from "./styles";

export const FilterBottomSheet = forwardRef<BottomSheet>((props, ref) => {
  const snapPoints = ["45%", "90%"];

  const [state, dispatch] = useReducer(filtersReducer, filtersInitialState);

  console.log(state);

  const handleIconTypesPress = (payload: string) => {
    if (!state.pokemonType.includes(payload)) {
      return dispatch({ type: ActionKind.SET_TYPE, payload: payload });
    }
    dispatch({ type: ActionKind.REMOVE_TYPE, payload });
  };

  const handleIconWeaknessesPress = (payload: string) => {
    if (!state.pokemonWeakness.includes(payload)) {
      return dispatch({ type: ActionKind.SET_WEAKNESSES, payload: payload });
    }
    dispatch({ type: ActionKind.REMOVE_WEAKNESSES, payload });
  };

  const handleIconHeightPress = (payload: string) => {
    if (!state.pokemonHeight.includes(payload)) {
      return dispatch({ type: ActionKind.SET_HEIGHT, payload: payload });
    }
    dispatch({ type: ActionKind.REMOVE_HEIGHT, payload });
  };

  const handleIconWeightPress = (payload: string) => {
    if (!state.pokemonWeight.includes(payload)) {
      return dispatch({ type: ActionKind.SET_WEIGHT, payload: payload });
    }
    dispatch({ type: ActionKind.REMOVE_WEIGHT, payload });
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
      <ScrollView style={styles.contentContainer}>
        <Title>Filters</Title>
        <Description>
          Use advanced search to explore Pokémon by type, weakness, height and
          more!
        </Description>
        <Divider top={35} />
        <FiltersScroll
          label="Types"
          data={pokemonTypes}
          onIconPress={handleIconTypesPress}
          selecteds={state.pokemonType}
        />
        <Divider top={35} />
        <FiltersScroll
          label="Weaknesses"
          data={pokemonTypes}
          onIconPress={handleIconWeaknessesPress}
          selecteds={state.pokemonWeakness}
        />
        <Divider top={35} />
        <FiltersScroll
          label="Height"
          data={pokemonHeights}
          onIconPress={handleIconHeightPress}
          selecteds={state.pokemonHeight}
        />
        <Divider top={35} />
        <FiltersScroll
          label="Weight"
          data={pokemonWeights}
          onIconPress={handleIconWeightPress}
          selecteds={state.pokemonWeight}
        />
        <Divider top={20} />
      </ScrollView>
    </BottomSheet>
  );
});
