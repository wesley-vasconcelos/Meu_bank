import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Logo } from "../../components/assets";
import Button from "../../components/button";
import DefaultText from "../../components/defaltText";
import Input from "../../components/input";
import { Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { requestAccess } from "../../redux/user";

const Login = ({ navigation }) => {
  const [infoCpf, setInfoCPF] = useState("");
  const [passWord, setPassword] = useState("");
  const [pass, setPass] = useState("");

  const handleCpf = () => {
    infoCpf.length === 9 ? setPass(infoCpf) : null;
  };
  const {
    user: { data },
  } = useSelector((value) => value);

  const dispatch = useDispatch();
  useEffect(() => {
    !!data._id && navigation.navigate("Home");
  }, [data]);
  return (
    <Container>
      {/* <Logo size={60} /> */}
      {pass === "" ? (
        <View>
          <DefaultText
            align="right"
            //   mTop={-10}
            width={85}
            text="Digite seu CPF"
            themeColor="whitePure"
            type="title1"
          />
          <DefaultText
            align="right"
            width={85}
            text=" ou CNPJ:"
            themeColor="whitePure"
            type="title1"
          />
          <Input
            width={85}
            multiline
            mTop={30}
            mBottom={16}
            placeholder="CPF
        "
            onChangeText={(text) => setInfoCPF(text)}
          />
          <Button
            onPress={() => handleCpf()}
            text="continue"
            radius="ball"
            width={85}
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
          <DefaultText
            align="right"
            //   mTop={-10}
            width={85}
            text="Digite "
            themeColor="whitePure"
            type="title1"
          />
          <DefaultText
            align="right"
            width={85}
            text="Sua senha"
            themeColor="whitePure"
            type="title1"
          />
          <Input
            width={85}
            multiline
            mTop={30}
            mBottom={16}
            placeholder="Senha
        "
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            text="Acessar"
            onPress={() =>
              dispatch(requestAccess({ cpf: infoCpf, password: passWord }))
            }
            radius="ball"
            width={85}
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