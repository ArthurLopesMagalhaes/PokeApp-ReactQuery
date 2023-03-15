import { SvgProps } from "react-native-svg";
import { Container, IBadgeStyle, Text } from "./styles";

interface IBadge {
  icon: React.FC<SvgProps>;
  label: string;
  stylesProps: IBadgeStyle;
}

export const Badge = ({ icon: Icon, label, stylesProps }: IBadge) => {
  return (
    <Container backgroundColor={stylesProps.backgroundColor}>
      <Icon height={20} color={"#FFF"} />
      <Text>{label}</Text>
    </Container>
  );
};
