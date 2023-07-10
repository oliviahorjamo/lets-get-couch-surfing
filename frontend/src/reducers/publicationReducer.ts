import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import storageService from "../services/storage";
import friendService from "../services/network"

const publicationsOfFriendsSlice = createSlice({
  name: "publicationsOfFriends",
  initialState: null,
  reducers: {
    setPublications(state, action) {
      return action.payload;
    },
  },
});

export const initializePublicationsOfFriends = () => {
  return async (dispatch: AppDispatch) => {
    const user = storageService.loadUser()
    if (user) {
      const friends = await friendService.getFriends(user.id);
      const publications = friends.map(f => f.publications)
      dispatch(setPublications(publications));
    }
  };
};

export const { setPublications } = publicationsOfFriendsSlice.actions;
export default publicationsOfFriendsSlice.reducer;
