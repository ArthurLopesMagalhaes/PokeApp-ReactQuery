import WeightLight from "../assets/svgs/weight-light.svg";
import WeightNormal from "../assets/svgs/weight-normal.svg";
import WeightHeavy from "../assets/svgs/weight-heavy.svg";
import { theme } from "../theme/global";

const { weightLight, weightNormal, weightHeavy } = theme.colors;

export const pokemonWeights = [
  { type: "light", icon: WeightLight, bgColor: weightLight },
  { type: "normal", icon: WeightNormal, bgColor: weightNormal },
  { type: "heavy", icon: WeightHeavy, bgColor: weightHeavy },
];
