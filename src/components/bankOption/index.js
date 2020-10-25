import React from "react";
import {
  Ionicons,
  Entypo,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { ContOption, OptionsButton } from "./styled";
import { list } from "../../../utils";
import { ScrollView } from "react-native";
import DefaultText from "../defaltText";
import theme from "../../../theme";

const BankOption = () => {
  return (
    <ContOption>
      <ScrollView horizontal>
        {list.map((item) => (
          <>
            <OptionsButton>
              {item.name === "Recarga de Celular" ? (
                <Ionicons
                  name="md-phone-portrait"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              {item.name === "Indicar amigos" ? (
                <Entypo
                  name="add-user"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              {item.name === "Transferir" ? (
                <AntDesign
                  name="upload"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              {item.name === "Depositar" ? (
                <AntDesign
                  name="download"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              {item.name === "Dividir valor" ? (
                <SimpleLineIcons
                  name="share"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              {item.name === "Cobrar" ? (
                <AntDesign
                  name="plus"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              {item.name === "Pagar" ? (
                <AntDesign
                  name="barcode"
                  size={24}
                  color={theme.color.general.greyLighter}
                />
              ) : null}
              <DefaultText
                align="center"
                width={20}
                bold
                text={`${item.name}`}
                themeColor="black"
              />
            </OptionsButton>
          </>
        ))}
      </ScrollView>
    </ContOption>
  );
};

export default BankOption;
