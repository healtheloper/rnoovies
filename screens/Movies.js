import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Btn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Movies = ({ navigation: { navigate } }) => (
  <Btn onPress={() => navigate("Stack", { screen: "Two" })}>
    <Text>Movies</Text>
  </Btn>
);

export default Movies;
