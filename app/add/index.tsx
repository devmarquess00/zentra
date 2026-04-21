import { Buttons } from "@/src/components/add/buttons";
import { Inputs } from "@/src/components/add/inputs";
import { Navigation } from "@/src/components/navigation";
import { useAdd } from "@/src/hooks/add/useAdd";
import { Button } from "@/src/shared/ui/components/Button/Button";
import { StyleSheet, Text, View } from "react-native";

export default function Add() {
  const {
    buttonEntriesValue,
    buttonExitValue,
    toggleButtonEntriesValue,
    toggleButtonExitValue,
  } = useAdd();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Buttons
          onClickButtonExit={toggleButtonExitValue}
          onClickButtonEntries={toggleButtonEntriesValue}
          buttonEntriesValue={buttonEntriesValue}
          buttonExitValue={buttonExitValue}
        />

        <Button variant="destructive">
          <Text style={{ color: "white" }}>teste doido demais</Text>
        </Button>

        <Inputs />
      </View>

      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    backgroundColor: "#080808",
  },

  containerHeader: {
    marginTop: 76,
  },

  input: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#A39D9D",
    fontWeight: 800,
    fontSize: 40,
  },
});
