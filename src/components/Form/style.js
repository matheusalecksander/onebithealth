import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 45,
    height: "100%",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#171819"
  },
  label:{
    color: "#ff0043",
    fontSize: 18,
    alignSelf: 'center',
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
    color: "#fff",
    alignSelf: "center"
  }
})

export default styles