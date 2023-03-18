import { useTheme } from "styled-components";
import { Container, Label } from "./styles";

interface IButton {
  text: string;
  selected?: boolean;
}

export const Button = ({ text, selected }: IButton) => {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.75}
      bgColor={
        selected ? theme.colors.buttonSelected : theme.colors.buttonUnselected
      }
    >
      <Label
        textColor={selected ? theme.colors.textWhite : theme.colors.textGray}
      >
        {text}
      </Label>
    </Container>
  );
};
