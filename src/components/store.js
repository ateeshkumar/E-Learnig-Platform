import { configureStore, Tuple } from "@reduxjs/toolkit";

configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(additionalMiddleware, logger),
});
