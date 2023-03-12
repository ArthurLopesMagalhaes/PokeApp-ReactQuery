import { Text } from "react-native";
import { Container, InputField } from "./styles";

import SearchSvg from "../../assets/svgs/search.svg";
import { useTheme } from "styled-components";

export const Input = () => {
  const theme = useTheme();

  return (
    <Container>
      <SearchSvg color={theme.colors.textGray} />
      <InputField />
    </Container>
  );
};
