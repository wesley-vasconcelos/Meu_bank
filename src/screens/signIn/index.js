import React, { useState } from "react";
import theme from "../../../theme";
import DefaultText from "../../components/defaltText";
import HeaderBank from "../../components/headerBank";
import { Container, FixRow, MenuView } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input";
import { cpfMask, validateEmail, cnpjMask } from "../../../utils";
import { KeyboardAvoidingView } from "react-native";

const SignIn = () => {
  const { goBack } = useNavigation();
  const [document, setDocument] = useState(false);
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: "",
    CpfCnpj: "",
  });

  return (
    <Container>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <FixRow>
          <AntDesign
            name="left"
            onPress={() => goBack()}
            size={24}
            color={theme.color.general.greyLighter}
          />
          <HeaderBank />
        </FixRow>

        <MenuView>
          <Input
            width={85}
            multiline
            mTop={30}
            mBottom={16}
            onChangeText={(name) => setAuth({ ...auth, name })}
            placeholder="Nome Completo
                "
          />

          <Input
            width={85}
            multiline
            mTop={30}
            mBottom={16}
            onChangeText={(email) => validateEmail(setAuth({ ...auth, email }))}
            placeholder=" E-mail
                "
          />
          <FixRow>
            <DefaultText
              align="left"
              mBottom={5}
              text="Selecione :"
              themeColor="black"
              width={30}
              bold
              type="body"
            />
            <DefaultText
              align="center"
              mBottom={5}
              mLeft={10}
              onPress={(text) => setDocument(true)}
              text="CPF"
              themeColor="greyLighter"
              width={20}
              type="body"
            />
            <DefaultText
              align="center"
              mBottom={5}
              onPress={() => setDocument(false)}
              mLeft={10}
              text="CNPJ"
              themeColor="greyLighter"
              width={20}
              type="body"
            />
          </FixRow>
          {document && (
            <Input
              width={85}
              multiline
              value={auth.CpfCnpj || ""}
              keyboardType="numeric"
              mTop={30}
              mBottom={16}
              onChangeText={(text) =>
                setAuth({ ...auth, CpfCnpj: cpfMask(text) })
              }
              placeholder="CPF
            "
            />
          )}

          {!document && (
            <Input
              width={85}
              multiline
              keyboardType="numeric"
              value={auth.CpfCnpj || ""}
              mTop={30}
              mBottom={16}
              onChangeText={(text) =>
                setAuth({ ...auth, CpfCnpj: cnpjMask(text) })
              }
              placeholder="CNPJ
                "
            />
          )}
          <Input
            width={85}
            multiline
            keyboardType="numeric"
            mTop={30}
            mBottom={16}
            onChangeText={(password) => setAuth({ ...auth, password })}
            placeholder="senha
            "
          />
        </MenuView>
        <Button
          text="Enviar"
          radius="ball"
          width={85}
          mTop={80}
          bold
          align="center"
          type="body"
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
