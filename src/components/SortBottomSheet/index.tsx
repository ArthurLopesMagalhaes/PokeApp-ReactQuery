import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, useState } from "react";

import { ScrollView } from "react-native-gesture-handler";

import { Button } from "../Button";

import { Divider } from "../Divider";

import { Description, styles, Title } from "./styles";

type SortOptions = "smallest" | "highest" | "a-z" | "z-a";

export const SortBottomSheet = forwardRef<BottomSheet>((props, ref) => {
  const snapPoints = ["45%", "90%"];

  const [selected, setSelected] = useState<SortOptions>("a-z");

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
        <Title>Sort</Title>
        <Description>
          Sort Pokémons alphabetically or by National Pokédex number!
        </Description>
        <Divider top={35} />
        <Button
          text="Smallest number first"
          selected={selected === "smallest"}
          onPress={() => setSelected("smallest")}
        />
        <Divider top={20} />
        <Button
          text="Highest number first"
          selected={selected === "highest"}
          onPress={() => setSelected("highest")}
        />
        <Divider top={20} />
        <Button
          text="A-Z"
          selected={selected === "a-z"}
          onPress={() => setSelected("a-z")}
        />
        <Divider top={20} />
        <Button
          text="Z-A"
          selected={selected === "z-a"}
          onPress={() => setSelected("z-a")}
        />
      </ScrollView>
    </BottomSheet>
  );
});
