import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";

function Bill() {
  const [bill, setBill] = useState(null);

  const billAmount = (inputAmount) => {
    setBill(inputAmount);
  };

  return (
    <View style={styles.billComp}>
      <Text style={styles.billText}>Bill</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Bill Amount"
        onChangeText={billAmount}
        value={bill}
      />
      {bill ? <Text>{bill}</Text> : null}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image styels={styles.img} source={require("./imgs/logo.png")} />
      </View>
      <View style={styles.appBox}>
        <Text>App Go here</Text>
        <Bill />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(197, 228, 231, 255)",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    flex: 0,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  appBox: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: "60%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  billComp: {
    flex: 1,
    fontSize: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  billText: {
    flex: 1,
    fontSize: 40,
    textAlign: "left",
    justifyContent: "start",
  },
});
