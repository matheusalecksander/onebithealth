import React from 'react';
import { View, Text } from 'react-native';

import styles from './style'


export default function ResultImc(props){
  return(
    <View>
      <Text style={styles.label}>{props.messageResultImc}</Text>
      <Text style={styles.result}>{props.resultImc}</Text>
    </View>
  )
}
