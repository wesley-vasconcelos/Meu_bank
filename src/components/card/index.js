import  React, {useState} from "react";
import DefaultText from "../defaltText";
import { Container, FixRow , Box, ButtonList} from './styled'
import { FontAwesome5, MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";



const Card = () => {
  const {navigate} = useNavigation();
 
const [balance, setBalance] = useState(true)

  return (
    <>
    <Container>
      <Box>

      <FixRow>
      <FontAwesome5 name="money-bill-alt" size={24} color={theme.color.general.primary} />
      <DefaultText
          align="left"
          width={80}
          text='Conta'
          mLeft={10}
          themeColor="greyLighter"
          type="subtitle"
          />
          </FixRow>
          {!balance &&
          <MaterialCommunityIcons onPress={() => setBalance(!balance)} name="eye-outline" size={24} color="black" />}
          {balance &&
          <MaterialCommunityIcons onPress={() => setBalance(!balance)} size={24} name="eye-off" color={theme.color.general.black} />
}
          </Box>
          <DefaultText
          align="left"
          mTop={50}
          width={80}
          text='Saldo disponivel'
          themeColor="greyLighter"
          type="subtitle"
          />
          {balance &&
          <DefaultText
          align="left"
          mTop={5}
          width={80}
          text='R$ 200,00'
          themeColor="black"
          type="title2"
          />}
          <ButtonList onPress={() => navigate('ListMoney')}>
          <MaterialCommunityIcons name="card-text" size={24} color={theme.color.general.greyLighter} />
          <DefaultText
          align="left"
          mTop={5}
          mLeft={10}
          width={60}
          text='Compra em Lourencini com de alim de R$ 50,23 no débito ontem'
          themeColor="greyLighter"
          type="body"
          />
          <AntDesign name="right" size={24} color={theme.color.general.greyLighter} />
          </ButtonList>
    </Container>
    <Container>
    <MaterialCommunityIcons name="card-text" size={24} color={theme.color.general.greyLighter} />

      <DefaultText
          align="center"
          width={60}
          text='Ainda não podemos te oferecer um cartão de crédito.'
          themeColor="primary"
          type="title2"
          />
          <DefaultText
          align="center"
          mTop={10}
          mBottom={10}
          width={60}
          text='Você recentemente passou por uma análise e não pudemos te oferecer um cartão de crédito. Sugerimos
          que voê espere 3 meses a partir do último pedido para solicitar novamente.'
          themeColor="greyLighter"
          type="headline"
          />    
    </Container>


    </>
  );
}


export default Card