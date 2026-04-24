import { ICast } from "../interfaces/cast";
import { Cast } from "../interfaces/credits.response";

export class CastMapper {
  static fromMovieDbCastToEntity = (actor: Cast): ICast => {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    };
  };
}
