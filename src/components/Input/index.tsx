import { useTheme } from "styled-components";
import { Container, InputField } from "./styles";

import SearchSvg from "../../assets/svgs/search.svg";

export const Input = () => {
  const theme = useTheme();

  return (
    <Container>
      <SearchSvg color={theme.colors.textGray} />
      <InputField />
    </Container>
  );
};
