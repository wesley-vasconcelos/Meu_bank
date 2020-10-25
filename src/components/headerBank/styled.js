import styled, { css } from "styled-components";

export const Container = styled.View`
  flex: 0.4;
  background-color: ${(g) => g.theme.color.button.primaryDark};
  align-items: center;
  justify-content: center;
`;
export const FixRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
