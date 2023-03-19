import { useTheme } from "styled-components";
import { Container, Label } from "./styles";

interface IButton {
  text: string;
  selected: boolean;
  onPress: () => void;
}

export const Button = ({ text, selected, onPress }: IButton) => {
  const theme = useTheme();

  return (
    <Container activeOpacity={0.75} selected={selected} onPress={onPress}>
      <Label selected={selected}>{text}</Label>
    </Container>
  );
};
