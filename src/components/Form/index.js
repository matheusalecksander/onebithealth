import React, { useState } from 'react';
import { View,
         Text,
         TextInput,
         TouchableOpacity,
         Vibration,
         Pressable,
         Keyboard,
         FlatList } from 'react-native';

import styles from './style'

import ResultImc from '../ResultImc/'


export default function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha os campos de Altura e Peso")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function calculateImc() {
    let heightFormat = height.replace(',', '.')
    let weightFormat = weight.replace(',', '.')
    let totalImc = (weightFormat/(heightFormat*heightFormat)).toFixed(2)

    setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
    /* Aqui estamos adicionando um novo calculo ao nosso array para exibirmos na FlatList
    Vamos utilziar o método new Date().getTime() para criação do nosso id
    já que esse método nos retorna uma nova data em formato de milissegundos
    então passamos ele para ser nosso id para que a flatlist possa imprimir
    o resultado na tela */
    setImc(totalImc)
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
    }
    else{
      setImc(null)
      errorMsg()
      setTextButton("Calcular")
      setMessageImc("Preencha os campos de Altura e Peso")
  }}

  return(
    <View style={styles.container}>
      { imc === null ? 
        <Pressable 
         onPress={Keyboard.dismiss}
        >

        <Text style={styles.label}>Altura</Text>
        <Text style={styles.error}> {errorMessage} </Text>
        <TextInput style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="EX: 1.75"
          placeholderTextColor="#909090"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Peso</Text>
        <Text style={styles.error}> {errorMessage} </Text>

        <TextInput style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="EX: 75.5"
          placeholderTextColor="#909090"
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
        </Pressable>
      :
        <View style={styles.showResultImc}>
          <ResultImc
            messageResultImc={messageImc}
            resultImc={imc} />
          <TouchableOpacity
            onPress={() => validateImc()}
            style={styles.btnCalculate}
            activeOpacity={0.7}
          >
            <Text style={styles.textBtnCalculate}>
              {textButton}
            </Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        showVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({item}) => {
          return(
            <Text style={styles.resultResultItemList}>Resultado IMC = 
              <Text style={styles.resultImcItem}>
                {" "}{item.imc}
              </Text>
            </Text>
          )
        }}
        keyExtractor={(item) => {
          item.id
        }}
      />
    </View>
  )
} 
