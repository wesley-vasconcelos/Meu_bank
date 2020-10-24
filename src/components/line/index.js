import styled, { css } from 'styled-components'
import { getPercentageSizeHeight, getPercentageSizeWidth, getRelativeSize } from '../../../utils'

export const Line = styled.View`
  height: 1px;
  background-color: ${g => g.theme.color.button.black};
  ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}
  ${({ vertical }) =>
    vertical &&
    css`
      margin: ${getPercentageSizeHeight(vertical)}px 0;
    `}
    ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${getRelativeSize(mBottom)};
    `}
`
