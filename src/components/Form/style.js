import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 45,
    height: "95%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#171819",
  },
  label:{
    color: "#ff0043",
    fontSize: 18,
    marginLeft: 25,
    fontWeight: "bold",
  },
  error: {
    color: "#ff0055",
    fontSize: 12,
    marginLeft: 25,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    margin: 20,
    color: "#fff",
    borderBottomColor: "#ff0043",
    borderBottomWidth: 1,
  },
  btnCalculate:{
    width: "90%",
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#ff0043",
    borderRadius: 30,
    marginBottom: 10,
  },
  textBtnCalculate: {
    fontSize: 18,
    color: "#c7c7c7",
    alignSelf: "center"
  },
  showResultImc: {
    width: "100%",
    height: "50%",
  },  
  listImcs: {
    marginTop: 20,
    height: 125
   },
  resultImcItem: {
    marginLeft: "27%",
    color: "#ff0043",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5
  },
  resultResultItemList: {
    marginLeft: "27%",
    color: "#a0a0a0",
    marginBottom: 5
  }
})

export default styles