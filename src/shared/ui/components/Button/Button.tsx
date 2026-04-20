import { TouchableOpacity, View } from "react-native";
import { ButtonProps } from "./Button.types";
import { buttonStyles, buttonVariants } from "./styles/button.styles";

const Button = ({
  children,
  variant = "primary",
  direction = "row",
  rounded = "small",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.base,
        buttonVariants.variants[variant],
        buttonVariants.direction[direction],
        buttonVariants.rounded[rounded],
      ]}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export { Button };

