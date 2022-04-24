import { createStore,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {Reducer} from "./Reducer";

const composeEnhancers = compose;

const store =createStore(
    Reducer,
    composeEnhancers(applyMiddleware(thunk))
)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;