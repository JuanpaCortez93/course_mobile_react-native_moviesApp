import { Href, Redirect } from "expo-router";

const MoviesApp = () => {
  return <Redirect href={"/home" as Href} />;
};

export default MoviesApp;
