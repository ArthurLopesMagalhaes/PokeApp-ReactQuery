import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      typeBug: string;
      typeDark: string;
      typeDragon: string;
      typeEletric: string;
      typeFairy: string;
      typeFighting: string;
      typeFire: string;
      typeFlying: string;
      typeGhost: string;
      typeGrass: string;
      typeGround: string;
      typeIce: string;
      typeNormal: string;
      typePoison: string;
      typePhysic: string;
      typeRock: string;
      typeSteel: string;
      typeWater: string;

      backgroundTypeBug: string;
      backgroundTypeDark: string;
      backgroundTypeDragon: string;
      backgroundTypeEletric: string;
      backgroundTypeFairy: string;
      backgroundTypeFighting: string;
      backgroundTypeFire: string;
      backgroundTypeFlying: string;
      backgroundTypeGhost: string;
      backgroundTypeGrass: string;
      backgroundTypeGround: string;
      backgroundTypeIce: string;
      backgroundTypeNormal: string;
      backgroundTypePoison: string;
      backgroundTypePhysic: string;
      backgroundTypeRock: string;
      backgroundTypeSteel: string;
      backgroundTypeWater: string;

      backgroundWhite: string;
      backgroundDefaultInput: string;
      backgroundPressedInput: string;
      backgroundModal: string;

      textWhite: string;
      textBlack: string;
      textGray: string;
      textNumber: string;

      heightShort: string;
      heightMedium: string;
      heightTall: string;

      weightLight: string;
      weightNormal: string;
      weightHeavy: string;
    };

    fontSize: {
      sm: number;
      md: number;
      lg: number;
      xxl: number;
    };

    fontFamily: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
