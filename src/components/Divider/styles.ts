import styled from "styled-components/native";
import { IDivider } from ".";

export const Container = styled.View<IDivider>`
  margin-top: ${(props) => (props.top ? props.top : 0)}px;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
`;
