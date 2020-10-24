import styled, { css } from 'styled-components'
import { getRelativeSize, getPercentageSizeWidth } from '../../../utils'

export const Container = styled.View`
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}
  ${({ flexEnd }) =>
    flexEnd &&
    css`
      align-items: flex-end;
    `}
`
export const FixIcon = styled.View`
 padding-right: ${getRelativeSize(15)};
`

export const StyledButton = styled.TouchableOpacity`
  background-color: ${g => g.theme.color.button.primary};
  padding: ${getRelativeSize(15)} ${getRelativeSize(10)};
  border-radius: ${g => g.theme.radius.medium};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${g => g.theme.color.button.primary};
  border-width: 1px;
  width: ${getPercentageSizeWidth(90)};
  ${({ outline, color }) =>
    outline &&
    css`
      background: transparent;
      border-color: ${g => g.theme.color.button[color || 'greyDarker']};
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
 
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${g => g.theme.radius[radius]};
    `};
  ${({ circle, size }) =>
    circle &&
    css`
      width: ${getRelativeSize(size || 50)};
      height: ${getRelativeSize(size || 50)};
      border-radius: ${g => g.theme.radius.ball};
    `};
  ${({ background }) =>
    background &&
    css`
      background-color: ${g => g.theme.color.button[background]};
      border-color: ${g => g.theme.color.button[background]};
    `};
  ${({ ButtonSend }) =>
    ButtonSend &&
    css`
      background-color: ${g => g.theme.color.button[ButtonSend]};
      padding: ${getRelativeSize(4)};
      border-color: ${ButtonSend && 'transparent'};
    `};
  ${({ backInput }) =>
    backInput &&
    css`
      background-color: ${g => g.theme.color.button.input};
      border-color: transparent;
    `};

  ${({ noBackground }) =>
    noBackground &&
    css`
      background-color: ${noBackground && 'transparent'};
      border-color: ${noBackground && 'transparent'};
    `};

  ${({ buttonRecord }) =>
    buttonRecord &&
    css`
      background-color: ${g => g.theme.color.button.whitePure};
      border-color: ${g => g.theme.color.button.greyDarker};
    `};
  ${({ backcinz }) =>
    backcinz &&
    css`
      background-color: ${g => g.theme.color.button.input};
      border-color: ${backcinz && 'transparent'};
      width: ${getPercentageSizeWidth(100)};
      height: ${getPercentageSizeWidth(20)};

      padding: ${getRelativeSize(15)} };

      
    `};
  ${({ BackgroundWhite }) =>
    BackgroundWhite &&
    css`
      background-color: ${g => g.theme.color.button.whitePure};
      border-color: ${g => g.theme.color.button.whitePure};
    `};
  ${({ later }) =>
    later &&
    css`
      background-color: ${g => g.theme.color.button.secureColor};
    `}
  ${({ small }) =>
    small &&
    css`
      padding: ${getRelativeSize(5)} ${getRelativeSize(10)};
    `}
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${getRelativeSize(mTop)};
    `}
    ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${getRelativeSize(mBottom)};
    `}
    ${({ vertical }) =>
    vertical &&
    css`
      margin: ${getRelativeSize(vertical)} 0;
    `}
`
