import { Text, View } from "react-native";
import Chart from "./chart";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SciChart Example</Text>
      <Chart />
    </View>
  );
}
