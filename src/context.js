import { createContext } from "react";

const state = {
  text: "hello world",
};

const action = {
  change: (value) => {
    state.text = value;
  },
};

const context = createContext({ state, action });

export default context;
