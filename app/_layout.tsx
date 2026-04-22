import { Text, View } from "react-native";
import "../global.css";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-800">
        Welcome to my app!
      </Text>
    </View>
  );
};

export default RootLayout;
