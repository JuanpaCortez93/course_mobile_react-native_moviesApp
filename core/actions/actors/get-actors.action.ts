import { movieApi } from "@/core/api/movie-api";
import { ICast } from "@/infrastructure/interfaces/cast";
import { CreditsResponse } from "@/infrastructure/interfaces/credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getActors = async (id: number | string): Promise<ICast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);
    const actors = data.cast.map((a) => CastMapper.fromMovieDbCastToEntity(a));
    return actors;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
