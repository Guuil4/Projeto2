import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/stylesheets";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Meu Aplicativo</Text>
    </View>
  );
}
