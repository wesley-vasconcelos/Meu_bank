import React, { useState } from "react";
import DefaultText from "../defaltText";
import { Container, FixRow } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../theme";

const HeaderBank = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <AntDesign
        name="left"
        onPress={() => goBack()}
        size={24}
        color={theme.color.general.greyLighter}
      />
      <FixRow>
        <DefaultText
          align="center"
          mBottom={5}
          wi
          text="My"
          themeColor="primary"
          type="title1"
        />
        <DefaultText
          align="center"
          mBottom={5}
          mLeft={10}
          text="Bank"
          themeColor="whitePure"
          type="title1"
        />
      </FixRow>
    </Container>
  );
};

export default HeaderBank;
