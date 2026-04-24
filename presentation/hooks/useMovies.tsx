import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action copy";
import { topRatedAction } from "@/core/actions/movies/top-rated";
import { upcomingAction } from "@/core/actions/movies/upcoming";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top_rated"],
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, //24 hrs,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
