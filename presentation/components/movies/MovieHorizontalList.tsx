import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface IProps {
  title?: string;
  movies: Movie[];

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: IProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
    isLoading.current = false;
  };

  return (
    <View>
      <Text className="text-2xl font-bold px-4 mb-3 mt-3">{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
