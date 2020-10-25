import styled, { css } from "styled-components";
import { getPercentageSizeWidth } from "../../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.primaryDark};
  align-items: center;
  justify-content: center;
`;
export const FixImage = styled.View`
  align-items: center;
  justify-content: center;
  width: ${getPercentageSizeWidth(90)};
`;
