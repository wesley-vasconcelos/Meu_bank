import  React, {useState} from "react";
import theme from "../../../theme";
import Card from "../../components/card";
import DefaultText from "../../components/defaltText";
import { Container, FixRow , ContOption,  OptionsButton, } from './styled'
import {  Ionicons , Entypo, AntDesign, SimpleLineIcons} from '@expo/vector-icons'
import { ScrollView } from "react-native";


const Home = () => {
const list = [
  {name: "Indicar amigos",},
  {name: "Transferir" },
  {name: "Depositar" },
  {name: "Recarga de Celular",},
  {name: "Dividir valor",},
  {name: "Cobrar" },  
  {name: "Pagar"},
]
  return (
    <Container
    >
      <FixRow>
       <DefaultText
          align="center"
          mBottom={5}
          text='My'
          themeColor="primary"
          type="title1"
          />
          <DefaultText
          align="center"
          mBottom={5}
          mLeft={10}
          text='Wesley'
          themeColor="whitePure"
          type="title2"
          />
          </FixRow>
<ContOption >
  <ScrollView horizontal>
          { list.map((item =>
          <>
      <OptionsButton>
     { item.name === 'Recarga de Celular' ? <Ionicons name="md-phone-portrait" size={24} color={theme.color.general.greyLighter} /> : null}
     { item.name === 'Indicar amigos' ? <Entypo name="add-user" size={24} color={theme.color.general.greyLighter} /> : null}
     { item.name === 'Transferir' ? <AntDesign name="upload" size={24} color={theme.color.general.greyLighter} /> : null}
     { item.name === 'Depositar' ? <AntDesign name="download" size={24} color={theme.color.general.greyLighter} /> : null}
     { item.name === 'Dividir valor' ? <SimpleLineIcons name="share" size={24} color={theme.color.general.greyLighter} /> : null}
     { item.name === 'Cobrar' ? <AntDesign name="plus" size={24} color={theme.color.general.greyLighter} /> : null}
     { item.name === 'Pagar' ? <AntDesign name="barcode" size={24} color={theme.color.general.greyLighter} /> : null}
        <DefaultText align='center' width={20} bold text={`${item.name}`} themeColor="black" />
      </OptionsButton>
      </>
))}
</ScrollView>
    </ContOption>
        <Card />
    </Container>
  );
}


export default Home