import axios from "axios";
import animeTypes from "./anime.types";

export const searchAnime = (isReset, query) => async (dispatch, getState) => {
  if (isReset) {
    dispatch({ type: animeTypes.RESET_STATE });
  }
  dispatch({ type: animeTypes.GET_ANIME_LIST });
  const currentPage = getState().anime.pageNumber;
  try {
    const results = await axios({
      url: `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${currentPage}`,
      method: "GET",
    });
    console.log(results);
    dispatch({
      type: animeTypes.GET_ANIME_LIST_SUCCESS,
      payload: results.data.results,
    });
  } catch (error) {
    console.log({ error });
  }
};
