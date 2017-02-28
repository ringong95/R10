import React from 'react'
import AboutContainer from './about-container'
import { View, Image } from 'react-native'
import { Conduct } from './../../components/conduct'
import styles from './styles'
export default About = ({conducts}) => {
  return (
    <View >
    <Image style={styles.image} source={require('./../../../images/r10_logo.png')} />
      {

        conducts.map((conduct) => {
          return <Conduct key={conduct.title} title={conduct.title} description={conduct.description} />
        })
      }
    </View>
  )
}
