import { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function HomeScreen() {
  const [query, setQuery] = useState("");

  return (
    <View className="flex-1 bg-white p-4">
      <Searchbar
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}
