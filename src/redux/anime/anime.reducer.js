import animeTypes from "./anime.types";
const INITIAL_STATE = {
  animeList: [],
  loading: false,
  error: null,
  pageLoading: false,
  pageNumber: 1,
};

const animeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case animeTypes.GET_ANIME_LIST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case animeTypes.GET_ANIME_LIST_SUCCESS:
      return {
        ...state,
        animeList: [...state.animeList, ...action.payload],
        pageNumber: state.pageNumber + 1,
        loading: false,
        error: null,
      };
    case animeTypes.GET_ANIME_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case animeTypes.RESET_STATE:
      return {
        ...state,
        animeList: [],
        loading: false,
        error: null,
        pageNumber: 1,
      };
    default:
      return state;
  }
};

export default animeReducer;
