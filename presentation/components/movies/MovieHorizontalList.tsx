import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface IProps {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: IProps) => {
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
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default MovieHorizontalList;
