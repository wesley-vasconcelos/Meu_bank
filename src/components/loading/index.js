import React from 'react'
import LottieView from 'lottie-react-native'
import { Container } from './styled'

const Loading = ({ center, size }) => {
  return (
    <Container center={center}>
      <LottieView
        source={require('../../components/assets/loading.json')}
        autoPlay
        loop
        style={{ width: size || 24, marginLeft: center ? 0 : 15 }}
      />
    </Container>
  )
}

export default Loading
