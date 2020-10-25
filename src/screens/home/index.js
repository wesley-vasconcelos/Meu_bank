import React, { useState } from "react";
import Card from "../../components/card";
import { Container } from "./styled";
import HeaderHome from "../../components/headerHome";
import BankOption from "../../components/bankOption";

const Home = () => {
  return (
    <Container>
      <HeaderHome />
      <BankOption />
      <Card />
    </Container>
  );
};

export default Home;
