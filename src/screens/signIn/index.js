import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createAccess } from "../../redux/user";
const SignIn = ({ navigation }) => {
  const { goBack } = useNavigation();
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: "",
    cpf: "",
  });

  const {
    user: { data },
  } = useSelector((value) => value);

  const dispatch = useDispatch();
  useEffect(() => {
    !!data?._id && navigation.navigate("Home");
  }, [data]);
  return (
    <Container>
      <HeaderBank />
      <MenuView>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
          <Input
            width={85}
            multiline={false}
            mTop={30}
            mBottom={16}
            onChangeText={(name) => setAuth({ ...auth, name })}
            placeholder="Nome Completo
                "
          />

          <Input
            width={85}
            multiline={false}
            multiline
            mTop={30}
            mBottom={16}
            onChangeText={(email) => validateEmail(setAuth({ ...auth, email }))}
            placeholder=" E-mail
                "
          />
          <Input
            width={85}
            multiline
            keyboardType="numeric"
            multiline={false}
            value={auth.cpf || ""}
            mTop={30}
            mBottom={16}
            onChangeText={(text) =>
              text.length <= 14
                ? setAuth({ ...auth, cpf: cpfMask(text) })
                : setAuth({ ...auth, cpf: cnpjMask(text) })
            }
            placeholder="CPF / CNPJ
                "
          />
          <Input
            width={85}
            textContentType={"password"}
            multiline={false}
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={6}
            mTop={30}
            mBottom={16}
            onChangeText={(password) => setAuth({ ...auth, password })}
            placeholder="senha"
          />
        </KeyboardAvoidingView>
      </MenuView>
      <Button
        text="Enviar"
        radius="ball"
        width={85}
        onPress={() => dispatch(createAccess(auth))}
        mTop={80}
        bold
        align="center"
        type="body"
      />
    </Container>
  );
};

export default SignIn;
