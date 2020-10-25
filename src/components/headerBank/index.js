import React, { useState } from "react";
import DefaultText from "../defaltText";
import { Container, FixRow } from "./styled";

const HeaderBank = () => {
  return (
    <Container>
      <FixRow>
        <DefaultText
          align="center"
          mBottom={5}
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
          type="title2"
        />
      </FixRow>
    </Container>
  );
};

export default HeaderBank;
