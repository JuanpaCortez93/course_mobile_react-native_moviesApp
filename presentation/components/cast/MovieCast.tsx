import { ICast } from "@/infrastructure/interfaces/cast";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface IProps {
  actors: ICast[] | undefined;
}

const MovieCast = ({ actors }: IProps) => {
  return (
    <View className="mt-5">
      <Text className="font-bold text-2xl mx-5 mb-4">Cast</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={actors}
        renderItem={({ item }) => <ActorCard actor={item} />}
        className="mb-5"
      />
    </View>
  );
};

export default MovieCast;
