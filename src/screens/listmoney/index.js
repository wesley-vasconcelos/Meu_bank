import  React, {useState} from "react";
import DefaultText from "../../components/defaltText";
import { Container, FixRow  } from './styled'



const ListMoney = () => {
const array = [
  {name: "Campra maria do bairro R$ 50,23",},
  {name: "Campra maria do bairro R$ 50,23" },
  {name: "Campra maria do bairro R$ 50,23" },
  {name: "Campra maria do bairro R$ 50,23" },
  {name: "Campra maria do bairro R$ 50,23" },
  {name: "Campra maria do bairro R$ 50,23" },
]
  return (
    <Container
    >
        {array.map((i =>
       <DefaultText
          align="center"
          mTop={10}
          text={i.name}
          themeColor="whitePure"
          type="body"
          />
          ))}
         
    </Container>
  );
}


export default ListMoney