import React, { useState } from 'react';
import { View,
         Text,
         TextInput,
         TouchableOpacity,
         Vibration,
         Pressable,
         Keyboard } from 'react-native';

import styles from './style'

import ResultImc from '../ResultImc/'


export default function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha os campos de Altura e Peso")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)

  function calculateImc() {
    let heightFormat = height.replace(',', '.')
    let weightFormat = weight.replace(',', '.')
    return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))
  }

  function errorMsg(){
    Vibration.vibrate()
    setErrorMessage("*Campo obrigatório")
  }

  function validateImc(){
    if(height != null && weight != null){
      calculateImc()
      setHeight(null)
      setWeight(null)
      setErrorMessage(null)
      setMessageImc("Seu IMC é:")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    errorMsg()
    setTextButton("Calcular")
    setMessageImc("Preencha os campos de Altura e Peso")
  }

  return(
    <Pressable 
     onPress={Keyboard.dismiss}
     style={styles.container}>
      <View>

        <Text style={styles.label}>Altura {errorMessage}</Text>
        <TextInput style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="EX: 1.75"
          placeholderTextColor="#ff0043"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Peso {errorMessage}</Text>
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
    </Pressable>
  )
}
