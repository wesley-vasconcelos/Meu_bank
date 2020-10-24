import styled, { css } from 'styled-components'
import { getPercentageSizeHeight, getPercentageSizeWidth, getRelativeSize } from '../../../utils'


export const Container = styled.View`
flex: 1;
background-color: ${g => g.theme.color.button.primaryDark};
align-items: center;
justify-content: center;


`
export const FixRow = styled.View`
flex-direction: row;
align-items: center;
`

export const ContOption = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: ${getRelativeSize(20)};
  padding-bottom: ${getRelativeSize(20)};


  align-items: center;
  justify-content: space-between;
width: ${getPercentageSizeWidth(90)};

`

export const OptionsButton = styled.TouchableOpacity`
  padding: ${getRelativeSize(10)};
  align-items: center;
  justify-content: center;
  border-radius: ${g => g.theme.radius.medium};
  border-width: 1px;
  border-color: ${g => g.theme.color.button.black};
  background-color:${g => g.theme.color.button.whitePure};



`

