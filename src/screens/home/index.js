import React, { useEffect } from "react";
import Card from "../../components/card";
import { Container } from "./styled";
import HeaderHome from "../../components/headerHome";
import BankOption from "../../components/bankOption";
import { useDispatch, useSelector } from "react-redux";
import { listPurchase } from "../../redux/user";

const Home = () => {
  const {
    user: { listPurchase: infoList, data },
  } = useSelector((value) => value);

  useEffect(() => {
    data?._id && dispatch(listPurchase(data._id));
  }, [data]);
  const dispatch = useDispatch();
  return (
    <Container>
      <HeaderHome data={data} />
      <BankOption />
      <Card infoList={infoList} />
    </Container>
  );
};

export default Home;
