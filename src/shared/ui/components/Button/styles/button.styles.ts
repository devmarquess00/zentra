import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: "red",
    color: "white",
  },

  // variants
  primary: { backgroundColor: "#5249EB" },
  destructive: { backgroundColor: "#E22B1B" },

  // directions
  direction_row: { flexDirection: "row" },
  direction_column: { flexDirection: "column" },

  // roundeds
  rounded_small: { borderRadius: 6 },
  rounded_medium: { borderRadius: 10 },
  rounded_large: { borderRadius: 14 },
});

export const buttonVariants = {
  variants: {
    primary: buttonStyles.primary,
    destructive: buttonStyles.destructive,
  },
  rounded: {
    small: buttonStyles.rounded_small,
    medium: buttonStyles.rounded_medium,
    large: buttonStyles.rounded_large,
  },
  direction: {
    row: buttonStyles.direction_row,
    column: buttonStyles.direction_column,
  },
};
