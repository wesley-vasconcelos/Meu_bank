import React, { useState } from "react";
import theme from "../../../theme";
import DefaultText from "../../components/defaltText";
import HeaderBank from "../../components/headerBank";
import { Container, FixRow, ButtonList, MenuView } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { requestLogoutUser } from "../../redux/user";
import { AsyncStorage } from "react-native";

const Menu = ({ data }) => {
  const array = [
    { name: "Me ajuda" },
    { name: "Perfil" },
    { name: "Configurar cartão" },
    { name: "Pedir conta PJ" },
    { name: "Participe de nossa promo" },
    { name: "Configurações do app" },
  ];

  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();
  return (
    <Container>
      <HeaderBank />
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
          text={data.agency}
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
          text={data.account}
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
        onPress={async () => {
          await AsyncStorage.removeItem("user");
          dispatch(requestLogoutUser());
          navigate("Initial");
        }}
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
