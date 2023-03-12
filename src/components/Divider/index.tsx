import { Container } from "./styles";

export interface IDivider {
  top?: number;
  bottom?: number;
}

export const Divider = ({ top, bottom }: IDivider) => {
  return <Container top={top} bottom={bottom} />;
};
