import MovieCast from "@/presentation/components/cast/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import useMovie from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, actorQuery } = useMovie(+id);

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    !actorQuery.data ||
    actorQuery.isLoading
  ) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator className="mb-4" color="purple" size={30} />
        <Text>Wait a moment</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />

      <MovieCast actors={actorQuery.data} />
    </ScrollView>
  );
};

export default MovieScreen;
