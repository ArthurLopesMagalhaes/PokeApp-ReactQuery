import HeightShort from "../assets/svgs/height-short.svg";
import HeightMedium from "../assets/svgs/height-medium.svg";
import HeightTall from "../assets/svgs/height-tall.svg";
import { theme } from "../theme/global";

const { heightShort, heightMedium, heightTall } = theme.colors;

export const pokemonHeights = [
  { type: "short", icon: HeightShort, bgColor: heightShort },
  { type: "medium", icon: HeightMedium, bgColor: heightMedium },
  { type: "tall", icon: HeightTall, bgColor: heightTall },
];
