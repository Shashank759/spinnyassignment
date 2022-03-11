import { combineReducers } from "redux";
import animeReducer from "./anime/anime.reducer";

export default combineReducers({
  anime: animeReducer,
});