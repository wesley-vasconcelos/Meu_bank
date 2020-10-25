import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../../utils";

export const Container = styled.View`
  width: ${getPercentageSizeWidth(90)};
  border-radius: ${(g) => g.theme.radius.medium};
  background-color: ${(g) => g.theme.color.button.whitePure};
  align-items: center;
  justify-content: center;
  padding-top: ${getRelativeSize(10)};
  padding-bottom: ${getRelativeSize(2)};
  margin-bottom: ${getPercentageSizeWidth(5)};
`;

export const FixRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${getRelativeSize(10)};
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: ${getPercentageSizeWidth(70)};
`;

export const ButtonList = styled.TouchableOpacity`
  width: ${getPercentageSizeWidth(89)};
  margin-top: ${getPercentageSizeWidth(10)};
  background-color: ${(g) => g.theme.color.button.input};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${getRelativeSize(5)};
`;

export const ViewList = styled.View`
  width: ${getPercentageSizeWidth(89)};
  margin-top: ${getPercentageSizeWidth(4)};
  background-color: ${(g) => g.theme.color.button.input};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${getRelativeSize(5)};
`;
