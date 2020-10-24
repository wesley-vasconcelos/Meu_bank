import styled, { css } from 'styled-components'
import { getPercentageSizeHeight, getPercentageSizeWidth, getRelativeSize } from '../../../utils'

export const StyledText = styled.Text`
  ${({ type }) =>
    type &&
    css`
      font-size: ${g => g.theme.text[type]};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}
    
    ${({ Scheduled }) =>
    Scheduled &&
    css`
      background-color: ${g => g.theme.color.button[Scheduled]};
      padding: ${getRelativeSize(7)};
      color: #fff;
      border-radius: ${g => g.theme.radius.large};
    `};

  ${({ Card }) =>
    Card &&
    css`
      background-color: ${g => g.theme.color.button[Card]};
      padding: ${getRelativeSize(5)};
    `};

  ${({ vertical }) =>
    vertical &&
    css`
      margin: ${getPercentageSizeHeight(vertical)}px 0;
    `}
  ${({ horizontal }) =>
    horizontal &&
    css`
      margin: 0 ${getRelativeSize(horizontal)};
    `}
  ${({ themeColor }) =>
    themeColor &&
    css`
      color: ${g => g.theme.color.text[themeColor]};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${getPercentageSizeWidth(height)};
    `}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${mBottom};
    `}
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${mTop};
    `}
  ${({ mLeft }) =>
    mLeft &&
    css`
      margin-left: ${mLeft};
    `}
  ${({ mRight }) =>
    mRight &&
    css`
      margin-right: ${mRight};
    `}
  ${({ alignSelf }) =>
    alignSelf &&
    css`
      align-self: ${alignSelf};
    `}
  ${({ positionAbsolute }) =>
    positionAbsolute &&
    css`
      position: absolute;
      background-color: #fff;
      padding-horizontal: ${getPercentageSizeHeight(1)}px;
    `}
`
