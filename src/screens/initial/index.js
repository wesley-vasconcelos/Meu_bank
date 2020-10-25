import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImgaeInitial, Logo } from "../../components/assets";
import Button from "../../components/button";
import DefaultText from "../../components/defaltText";
import HeaderBank from "../../components/headerBank";
import { Container, FixImage } from "./styled";

const Initial = ({ navigation }) => {
  const {
    user: { data, Loading },
  } = useSelector((value) => value);

  useEffect(() => {
    !!data?._id && navigation.navigate("Home");
  }, [data]);
  return (
    <Container>
      <HeaderBank />
      <FixImage>
        <ImgaeInitial />
      </FixImage>

      <DefaultText
        align="center"
        width={90}
        text="Um banco que cabe no seu bolso."
        themeColor="whitePure"
        type="title1"
      />
      <DefaultText
        align="center"
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
        onPress={() => navigation.navigate("SignIn")}
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
  );
};

export default Initial;
