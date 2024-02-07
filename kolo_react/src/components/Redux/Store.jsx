import { configureStore } from "@reduxjs/toolkit";

import Userdata from "./Userdata";

export const Store = configureStore({
  reducer: {
    Userdata,
  },
});
