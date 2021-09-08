import React from 'react';
import { View, Text, Share, TouchableOpacity } from 'react-native';

import styles from './style'


export default function ResultImc(props){

  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc
    })
  }

  return(
    <View>
      <Text style={styles.label}>{props.messageResultImc}</Text>
      <Text style={styles.result}>{props.resultImc}</Text>
      <TouchableOpacity
        onPress={onShare}
        style={styles.shareButton}>
        <Text style={styles.shareText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  )
}
