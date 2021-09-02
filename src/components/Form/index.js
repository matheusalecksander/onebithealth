import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
      setTextButton("Calcular novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha os campos de Altura e Peso")
  }

  return(
    <View>
      <View>

        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="EX: 1.75"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="EX: 75.5"
          keyboardType="numeric"
        />

        <Button
          onPress={() => validateImc()}
          title={textButton}
        />
      </View>

      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc} />


    </View>
  )
}
