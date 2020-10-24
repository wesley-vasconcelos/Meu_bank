import React, { useState } from 'react'
import { BoxInput, Remove, StyledInput, BoxRequire } from './styled'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'
import DefaultText from '../defaltText'
import theme from '../../../theme'

const Input = ({
  icon,
  setSearch,
  noBackground,
  width,
  disabled,
  setExternalFocus,
  error,
  require,
  ...rest
}) => {
  const [focus, setFocus] = useState(false)
  return (
    <BoxInput width={width} focus={focus} error={error} {...rest}>
      <StyledInput
        onFocus={() => {
          setFocus(true)
          !!setExternalFocus && setExternalFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
          !!setExternalFocus && setExternalFocus(false)
        }}
        focus={focus}
        editable={!disabled}
        placeholderTextColor={error ? '#EE2737' : '#818D97'}
        require={require}
        {...rest}
      />
      
    </BoxInput>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  mBottom: PropTypes.bool,
  mTop: PropTypes.bool,
  vertical: PropTypes.bool,
  width: PropTypes.number,
  error: PropTypes.bool,
  noRadiusLeft: PropTypes.bool,
  noBackground: PropTypes.bool,
  BackgroundCin: PropTypes.bool,
  require: PropTypes.bool,
}

export default Input
