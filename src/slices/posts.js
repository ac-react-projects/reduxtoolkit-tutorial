import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

//Slice for posts
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, payload) => {
      state.posts = payload.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

//Actions generated from slice
export const {
  getPosts,
  getPostsFailure,
  getPostsSuccess,
} = postsSlice.actions;

//Selector - Access any state from react component. Replacement of connect
export const postsSelector = (state) => state.posts;

//Reducer
export default postsSlice.reducer;

//Thunk
export const fetchPosts = () => async (dispatch) => {
  //Initating Loading State
  dispatch(getPosts());

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("DATA");
    console.log(data);
    dispatch(getPostsSuccess(data));
  } catch {
    dispatch(getPostsFailure());
  }
};
