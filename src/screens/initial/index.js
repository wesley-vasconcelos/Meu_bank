import React from "react";
import { Logo } from "../../components/assets";
import Button from "../../components/button";
import DefaultText from "../../components/defaltText";
import { Container } from "./styled";

const Initial = ({ navigation }) => {
  return (
    <>
      <Logo />
      <Container>
        <DefaultText
          align="right"
          width={90}
          text="Um banco que"
          themeColor="whitePure"
          type="title1"
        />
        <DefaultText
          align="right"
          width={90}
          text=" cabe no seu bolso."
          themeColor="whitePure"
          type="title1"
        />
        <DefaultText
          align="right"
          width={90}
          text="Vamos lá?"
          themeColor="whitePure"
          type="title1"
        />

        <Button
          background="whitePure"
          color="black"
          text="Abrir uma conta"
          radius="ball"
          width={85}
          mTop={30}
          bold
          align="center"
          type="body"
        />
        <Button
          text=" Acessar a minha conta"
          onPress={() => navigation.navigate("Login")}
          radius="ball"
          width={85}
          mTop={10}
          bold
          align="center"
          type="body"
        />
      </Container>
    </>
  );
};

export default Initial;
