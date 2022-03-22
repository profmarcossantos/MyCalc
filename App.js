import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

export default function App() {

  const [resultado, setResultado] = useState("0")
  const [numero1, setNumero1] = useState(0)
  const [operacao, setOperacao] = useState(null)
  const [troca, setTroca] = useState(false)
  const [formula, setFormula] = useState("")
  const [first, setFirst] = useState(true)

  const alteraDisplay = (numero) => {
    if (troca) {
      setResultado(numero)
      setTroca(false)
    }
    else {
      if (resultado === "0")
        setResultado(numero)
      else {
        let numeroOld = resultado
        numeroOld += numero
        setResultado(numeroOld)
      }
    }
  }

  const clear = () => {
    setResultado("0")
    setOperacao(null)
    setFormula("")
    setFirst(true)
  }

  const calculo = (ope) => {
    setOperacao(ope)
    setTroca(true)
    setNumero1(resultado)
    if (first)
      setFormula(`${formula} ${resultado} ${ope}`)
    else {
      setFormula(`${formula}  ${ope}`)
    }
  }


  const executa = (res) => {
    let n1 = parseInt(numero1)
    let n2 = parseInt(res)
    let resut = 0

    if (operacao === "+")
      resut = n1 + n2
    else if (operacao === "-")
      resut = n1 - n2
    else if (operacao === "*")
      resut = n1 * n2
    else if (operacao === "/")
      resut = n1 / n2

    setResultado(resut)
    setFirst(false)
    setFormula(`${formula} ${res} = ${resut}`)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.display}>
        {resultado}
      </Text>
      <View>
        <Text style={{ fontSize: 12, color: "black" }}>
          {formula}
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
      </View>
      <View style={styles.buttonSpace}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("7")}
          >
            <Text>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("8")}
          >
            <Text>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("9")}
          >
            <Text>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyleOp}
            onPress={() => calculo("+")}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonSpace}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("4F")}
          >
            <Text>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("5")}
          >
            <Text>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("6")}
          >
            <Text>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyleOp}
            onPress={() => calculo("-")}
          >
            <Text>-</Text>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.buttonSpace}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("1")}
          >
            <Text>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("2")}
          >
            <Text>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("3")}
          >
            <Text>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyleOp}
            onPress={() => calculo("*")}
          >
            <Text>*</Text>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.buttonSpace}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => alteraDisplay("0")}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyleOp}
            onPress={clear}
          >
            <Text>CE</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyleOp}
            onPress={() => executa(resultado)}
          >
            <Text>=</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonStyleOp}
            onPress={() => calculo("/")}
          >
            <Text>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    textAlign: "right",
    fontSize: 35,
    borderRadius: 10
  },
  buttonSpace: {
    flexDirection: 'row',
    marginTop: 5
  },
  button: {
    marginRight: 5,
    marginLeft: 5,
    flex: 4
  },
  buttonStyle: {
    backgroundColor: "#dad9d8",
    color: "black",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6
  }, buttonStyleOp: {
    backgroundColor: "#004390",
    color: "white",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6
  }
});
