import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2 mt-5">Movies App</Text>

      <MainSlideShow movies={nowPlayingQuery.data ?? []} />

      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />

      <MovieHorizontalList
        title="Top Rated"
        movies={topRatedQuery.data ?? []}
      />

      <MovieHorizontalList title="Upcoming" movies={upcomingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
