import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { CinemaReducer } from "./slice/cinema.slice";
import { CommonReducer } from "./slice/common.slice";
import { MovieReducer } from "./slice/movie.slice";
import { ShowtimeReducer } from "./slice/showtime.slice";
import { UserReducer } from "../store/reducer/user.reducer";

const RootReducer = combineReducers({
  cinema: CinemaReducer,
  common: CommonReducer,
  movie: MovieReducer,
  showtime: ShowtimeReducer,
  user: UserReducer
});

export const store = configureStore({ reducer: RootReducer });
