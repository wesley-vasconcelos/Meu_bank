import React, { useState } from "react";
import DefaultText from "../defaltText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../../theme";

const InfoNegative = () => {
  return (
    <>
      <MaterialCommunityIcons
        name="card-text"
        size={24}
        color={theme.color.general.greyLighter}
      />
      <DefaultText
        align="center"
        width={60}
        text="Ainda não podemos te oferecer um cartão de crédito."
        themeColor="primary"
        type="title2"
      />
      <DefaultText
        align="center"
        mTop={10}
        mBottom={10}
        width={60}
        text="Você recentemente passou por uma análise e não pudemos te oferecer um cartão de crédito. Sugerimos
 que voê espere 3 meses a partir do último pedido para solicitar novamente."
        themeColor="greyLighter"
        type="headline"
      />
    </>
  );
};

export default InfoNegative;
