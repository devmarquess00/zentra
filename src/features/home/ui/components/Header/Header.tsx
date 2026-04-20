import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { headerStyles } from "./styles/header.styles";

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.headerContent}>
        <View
          style={{
            width: 32,
            height: 32,
            backgroundColor: "#777FFF50",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>A</Text>
        </View>
        <View>
          <Ionicons name="eye" size={22} color="white" />
        </View>
      </View>
    </View>
  );
};

export { Header };

