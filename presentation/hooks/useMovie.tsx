import { getActors } from "@/core/actions/actors/get-actors.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

const useMovie = (id: number | string) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const actorQuery = useQuery({
    queryKey: ["actors", id],
    queryFn: () => getActors(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  console.log(actorQuery.data);

  return {
    movieQuery,
    actorQuery,
  };
};

export default useMovie;
