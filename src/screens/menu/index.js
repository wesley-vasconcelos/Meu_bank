import React, { useState } from "react";
import theme from "../../../theme";
import DefaultText from "../../components/defaltText";
import HeaderBank from "../../components/headerBank";
import { Container, FixRow, ButtonList, MenuView } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const array = [
    { name: "Me ajuda" },
    { name: "Perfil" },
    { name: "Configurar cartão" },
    { name: "Pedir conta PJ" },
    { name: "Participe de nossa promo" },
    { name: "Configurações do app" },
  ];

  const { goBack } = useNavigation();

  return (
    <Container>
      <FixRow>
        <AntDesign
          name="left"
          onPress={() => goBack()}
          size={24}
          color={theme.color.general.greyLighter}
        />
        <HeaderBank />
      </FixRow>
      <FixRow>
        <DefaultText
          align="center"
          text="Banco 888 "
          themeColor="whitePure"
          type="subtitle"
        />

        <DefaultText
          align="center"
          bold
          text="- My Pagamentos  S.A. "
          themeColor="whitePure"
          type="subtitle"
        />
      </FixRow>
      <FixRow>
        <DefaultText
          align="center"
          text="Agência "
          themeColor="whitePure"
          type="subtitle"
        />

        <DefaultText
          align="center"
          bold
          text="0001"
          themeColor="whitePure"
          type="subtitle"
        />
      </FixRow>
      <FixRow>
        <DefaultText
          align="center"
          mBottom={20}
          text="Conta "
          themeColor="whitePure"
          type="subtitle"
        />

        <DefaultText
          align="center"
          bold
          mBottom={20}
          text="3333333-3"
          themeColor="whitePure"
          type="subtitle"
        />
      </FixRow>
      <MenuView>
        {array.map((i) => (
          <ButtonList>
            <DefaultText
              align="left"
              mTop={5}
              mLeft={10}
              width={80}
              text={i.name}
              themeColor="greyLighter"
              type="body"
            />
            <AntDesign
              name="right"
              size={24}
              color={theme.color.general.greyLighter}
            />
          </ButtonList>
        ))}
      </MenuView>
      <Button
        text="Sair"
        radius="ball"
        width={85}
        mTop={80}
        bold
        align="center"
        type="body"
      />
    </Container>
  );
};

export default Menu;
