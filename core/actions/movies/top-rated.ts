import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface IOptions {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: IOptions) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
