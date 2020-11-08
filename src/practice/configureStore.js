import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middlewares/logger";
import api from "./middlewares/api";
 
// import reducer from "./bugs";
// import reducer from "./projects";
import reducer from "./reducer";

export default function () {
  const store = configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      api,
    ],
  });
  return store;
}
