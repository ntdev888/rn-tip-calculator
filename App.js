import { StatusBar } from "expo-status-bar";
import SvgUri from "react-native-svg";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

function Bill() {
  const [bill, setBill] = useState(null);

  const billAmount = (inputAmount) => {
    setBill(inputAmount);
  };

  return (
    <View style={styles.billComp}>
      <Text>Bill</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Bill Amount"
        onChangeText={billAmount}
        value={bill}
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <SvgUri width="auto" height="auto" source={require("./imgs/logo.svg")} />
      <Bill />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
