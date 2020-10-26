import React, { useEffect, useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { MyPassWord, Verify } from "../../components/assets";
import Button from "../../components/button";
import DefaultText from "../../components/defaltText";
import Input from "../../components/input";
import { Container, FixImage } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { requestAccess } from "../../redux/user";
import HeaderBank from "../../components/headerBank";
import { cnpjMask, cpfMask } from "../../../utils";
import Loading from "../../components/loading";

const Login = ({ navigation }) => {
  const [infoCpf, setInfoCPF] = useState("");
  const [passWord, setPassword] = useState("");
  const [pass, setPass] = useState("");

  const handleCpf = () => {
    infoCpf.length === 14 || 19 ? setPass(infoCpf) : null;
  };
  const {
    user: { data, Loading },
  } = useSelector((value) => value);

  const dispatch = useDispatch();
  useEffect(() => {
    !!data?._id && navigation.navigate("Home");
  }, [data]);
  return (
    <Container>
      <HeaderBank />
      {pass === "" ? (
        <View>
          <FixImage>
            <Verify />
          </FixImage>
          <DefaultText
            align="center"
            mBottom={20}
            width={90}
            text="Digite seu CPF ou CNPJ:"
            themeColor="whitePure"
            type="title1"
          />

          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
            <Input
              width={90}
              multiline={false}
              keyboardType="numeric"
              mTop={30}
              value={infoCpf || ""}
              mBottom={16}
              placeholder="CPF
                "
              onChangeText={(text) => setInfoCPF(text)}
              onChangeText={(text) => {
                text.length <= 14
                  ? setInfoCPF(cpfMask(text))
                  : setInfoCPF(cnpjMask(text));
              }}
            />
          </KeyboardAvoidingView>
          <Button
            onPress={() => handleCpf()}
            text="continue"
            radius="ball"
            width={90}
            mTop={80}
            bold
            align="center"
            type="body"
          />
        </View>
      ) : (
        <View />
      )}

      {pass === "" ? (
        <View />
      ) : (
        <View>
          <FixImage>
            <MyPassWord />
          </FixImage>
          <DefaultText
            align="center"
            //   mTop={-10}
            width={90}
            mBottom={20}
            text="Digite Sua senha "
            themeColor="whitePure"
            type="title1"
          />
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
            <Input
              width={90}
              textContentType={"password"}
              multiline={false}
              secureTextEntry={true}
              keyboardType="numeric"
              secureTextEntry
              maxLength={6}
              mTop={30}
              mBottom={16}
              placeholder="Senha"
              onChangeText={(text) => setPassword(text)}
            />
          </KeyboardAvoidingView>
          <Button
            text={Loading ? "Carregando" : "Acessar"}
            onPress={() => {
              dispatch(requestAccess({ cpf: infoCpf, password: passWord }));
            }}
            radius="ball"
            loading={Loading}
            width={90}
            mTop={80}
            bold
            align="center"
            type="body"
          />
        </View>
      )}
    </Container>
  );
};

export default Login;
