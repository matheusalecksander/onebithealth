import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style'

import ResultImc from '../ResultImc/'


export default function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha os campos de Altura e Peso")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function calculateImc() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validateImc(){
    if(height != null && weight != null){
      calculateImc()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu IMC é:")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha os campos de Altura e Peso")
  }

  return(
    <View style={styles.container}>
      <View style={styles.form}>

        <Text style={styles.label}>Altura</Text>
        <TextInput style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="EX: 1.75"
          placeholderTextColor="#ff0043"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="EX: 75.5"
          placeholderTextColor="#ff0043"
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={() => validateImc()}
          style={styles.btnCalculate}
          activeOpacity={0.7}
        >
          <Text style={styles.textBtnCalculate}>
            {textButton}
          </Text>
        </ TouchableOpacity>
      </View>

      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc} />
    </View>
  )
}
