import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

const middleware = applyMiddleware(thunk);

// create store
export const store = createStore(reducers, middleware);
