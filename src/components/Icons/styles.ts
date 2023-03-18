import styled from "styled-components/native";

export interface IIconStyles {
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity<IIconStyles>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;
