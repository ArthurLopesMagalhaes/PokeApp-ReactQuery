import { SvgProps } from "react-native-svg";
import TypeBugSvg from "../assets/svgs/type-bug.svg";
import TypeDarkSvg from "../assets/svgs/type-dark.svg";
import TypeDragonSvg from "../assets/svgs/type-dragon.svg";
import TypeElectricSvg from "../assets/svgs/type-electric.svg";
import TypeFairySvg from "../assets/svgs/type-fairy.svg";
import TypeFightingSvg from "../assets/svgs/type-fighting.svg";
import TypeFireSvg from "../assets/svgs/type-fire.svg";
import TypeFlyingSvg from "../assets/svgs/type-flying.svg";
import TypeGhostSvg from "../assets/svgs/type-ghost.svg";
import TypeGrassSvg from "../assets/svgs/type-grass.svg";
import TypeGroundSvg from "../assets/svgs/type-ground.svg";
import TypeIceSvg from "../assets/svgs/type-ice.svg";
import TypeNormalSvg from "../assets/svgs/type-normal.svg";
import TypePoisonSvg from "../assets/svgs/type-poison.svg";
import TypePsychicSvg from "../assets/svgs/type-psychic.svg";
import TypeRockSvg from "../assets/svgs/type-rock.svg";
import TypeSteelSvg from "../assets/svgs/type-steel.svg";
import TypeWaterSvg from "../assets/svgs/type-water.svg";

import { theme } from "../theme/global";

const {
  typeBug,
  typeDark,
  typeDragon,
  typeElectric,
  typeFairy,
  typeFighting,
  typeFire,
  typeFlying,
  typeGhost,
  typeGrass,
  typeGround,
  typeIce,
  typeNormal,
  typePoison,
  typePsychic,
  typeRock,
  typeSteel,
  typeWater,
} = theme.colors;

export interface IPokemonTypes {
  type: string;
  icon: React.FC<SvgProps>;
  bgColor: string;
}
[];

export const pokemonTypes = [
  { type: "bug", icon: TypeBugSvg, bgColor: typeBug },
  { type: "dark", icon: TypeDarkSvg, bgColor: typeDark },
  { type: "dragon", icon: TypeDragonSvg, bgColor: typeDragon },
  { type: "electric", icon: TypeElectricSvg, bgColor: typeElectric },
  { type: "fairy", icon: TypeFairySvg, bgColor: typeFairy },
  { type: "fighting", icon: TypeFightingSvg, bgColor: typeFighting },
  { type: "fire", icon: TypeFireSvg, bgColor: typeFire },
  { type: "flying", icon: TypeFlyingSvg, bgColor: typeFlying },
  { type: "ghost", icon: TypeGhostSvg, bgColor: typeGhost },
  { type: "grass", icon: TypeGrassSvg, bgColor: typeGrass },
  { type: "ground", icon: TypeGroundSvg, bgColor: typeGround },
  { type: "ice", icon: TypeIceSvg, bgColor: typeIce },
  { type: "normal", icon: TypeNormalSvg, bgColor: typeNormal },
  { type: "poison", icon: TypePoisonSvg, bgColor: typePoison },
  { type: "psychic", icon: TypePsychicSvg, bgColor: typePsychic },
  { type: "rock", icon: TypeRockSvg, bgColor: typeRock },
  { type: "steel", icon: TypeSteelSvg, bgColor: typeSteel },
  { type: "water", icon: TypeWaterSvg, bgColor: typeWater },
];
