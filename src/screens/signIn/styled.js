import styled, { css } from "styled-components";
import {
  getPercentageSizeHeight,
  getPercentageSizeWidth,
  getRelativeSize,
} from "../../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.primaryDark};
  align-items: center;
  justify-content: center;
`;

export const MenuView = styled.View`
  background-color: ${(g) => g.theme.color.button.whitePure};
  width: ${getPercentageSizeWidth(90)};
  padding: ${getRelativeSize(50)};
  margin-top: ${getPercentageSizeWidth(20)};

  align-items: center;
  justify-content: center;
  border-radius: ${(g) => g.theme.radius.medium};
`;

export const FixRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
