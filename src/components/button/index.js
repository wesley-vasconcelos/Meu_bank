import React from 'react'
import { Container, StyledButton, FixIcon } from './styled'
import Loading from '../loading'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'; 
import theme from '../../../theme';
import DefaultText from '../defaltText';

const Button = ({
  center,
  children,
  outline,
  loading,
  color,
  text,
  bold,
  Ant,
  type,
  flexEnd,
  onPress,
  ...rest
}) => {
  return (
    <Container center={center} flexEnd={flexEnd}>
      <StyledButton onPress={!loading && onPress} {...rest} loading outline={outline} color={color}>
    {Ant && 
    <FixIcon>

    <AntDesign name="plus" size={20} color={theme.color.general.whitePure} /> 
    </FixIcon>}
        {!!loading ? (
          <Loading center />
        ) : children ? (
          children
        ) : (
          <DefaultText
            white={!outline}
            themeColor={color}
            bold={bold}
            type={type || 'label'}
            text={text}
          />
        )}
      </StyledButton>
    </Container>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  center: PropTypes.bool,
  loading: PropTypes.bool,
  circle: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.number,
  outline: PropTypes.bool,
  backcinz: PropTypes.bool,
  background: PropTypes.string,
  later: PropTypes.bool,
  BackgroundWhite: PropTypes.bool,
}

export default Button
