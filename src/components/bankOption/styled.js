import styled, { css } from "styled-components";
import { getRelativeSize, getPercentageSizeWidth } from "../../../utils";

export const ContOption = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: ${getRelativeSize(20)};
  padding-bottom: ${getRelativeSize(20)};
  align-items: center;
  justify-content: space-between;
  width: ${getPercentageSizeWidth(90)};
`;

export const OptionsButton = styled.TouchableOpacity`
  padding: ${getRelativeSize(10)};
  align-items: center;
  justify-content: center;
  border-radius: ${(g) => g.theme.radius.medium};
  border-width: 1px;
  border-color: ${(g) => g.theme.color.button.black};
  background-color: ${(g) => g.theme.color.button.whitePure};
`;
