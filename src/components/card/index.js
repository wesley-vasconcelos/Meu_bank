import React, { useState } from "react";
import DefaultText from "../defaltText";
import { Container, FixRow, Box, ButtonList, ViewList } from "./styled";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import InfoNegative from "../infoCardNegative";
import { ScrollView } from "react-native";
import { formatedText, InfoCardList } from "../../../utils";
import { Line } from "../line";

const Card = () => {
  const { navigate } = useNavigation();
  const [balance, setBalance] = useState(true);
  const [list, setList] = useState(false);

  return (
    <>
      <ScrollView>
        <Container>
          <Box>
            <FixRow>
              <FontAwesome5
                name="money-bill-alt"
                size={24}
                color={theme.color.general.primary}
              />
              <DefaultText
                align="left"
                width={80}
                text="Conta"
                mLeft={10}
                themeColor="greyLighter"
                type="subtitle"
              />
            </FixRow>
            {!balance && (
              <MaterialCommunityIcons
                onPress={() => setBalance(!balance)}
                name="eye-outline"
                size={24}
                color="black"
              />
            )}
            {balance && (
              <MaterialCommunityIcons
                onPress={() => setBalance(!balance)}
                size={24}
                name="eye-off"
                color={theme.color.general.black}
              />
            )}
          </Box>
          <DefaultText
            align="left"
            mTop={50}
            width={80}
            text="Saldo disponivel"
            themeColor="greyLighter"
            type="subtitle"
          />
          {balance && (
            <DefaultText
              align="left"
              mTop={5}
              width={80}
              text="R$ 200,00"
              themeColor="black"
              type="title2"
            />
          )}
          {!list && (
            <ButtonList onPress={() => setList(!list)}>
              <MaterialCommunityIcons
                name="card-text"
                size={24}
                color={theme.color.general.greyLighter}
              />
              <DefaultText
                align="left"
                mTop={5}
                mLeft={10}
                width={60}
                text={formatedText(
                  "Compra em Lourencini com de alim de R$ 50,23 no débito ontem",
                  55
                )}
                themeColor="greyLighter"
                type="body"
              />
              <AntDesign
                name="right"
                size={24}
                color={theme.color.general.greyLighter}
              />
            </ButtonList>
          )}
        </Container>
        <Container>
          {!list && <InfoNegative />}

          {list && (
            <>
              <FixRow>
                <DefaultText
                  align="left"
                  bold
                  mBottom={10}
                  width={75}
                  text="Lançamentos"
                  themeColor="black"
                  type="headline"
                />
                <AntDesign
                  name="up"
                  style={{ paddingRight: 15 }}
                  size={24}
                  onPress={() => setList(!list)}
                  color={theme.color.general.greyLighter}
                />
              </FixRow>
              <Line width={85} />
              {InfoCardList.map((item) => (
                <ViewList onPress={() => setList(!list)}>
                  <MaterialCommunityIcons
                    name="card-text"
                    size={24}
                    color={theme.color.general.greyLighter}
                  />

                  <DefaultText
                    align="center"
                    mLeft={10}
                    width={60}
                    text={formatedText(item.name, 25)}
                    themeColor="greyLighter"
                    type="body"
                  />
                  <DefaultText
                    align="center"
                    mLeft={10}
                    // width={60}
                    text={"R$" + " " + item.price}
                    themeColor="primary"
                    type="body"
                  />
                </ViewList>
              ))}
            </>
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default Card;
