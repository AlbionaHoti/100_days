export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  // the action is how you manipulate what the data looks like
  // the state is like the initialstate for example, and the
  // actions are like: set user, set the current playing.. etc
  console.log(action); // debug the action -> ALWAYS

  // Action -> TYPE, [PAYLOAD] -> This can by dynamic

  /*
      For the DATA LAYER - for example: we push the user to the data layer
      we always dispatch something called the ACTION.
      That ACTION HAS TWO THINGS:
        - 
  */
  // the primary job of the reducer is to listen to the actions
  // when you receive an action let's say is called `SET_USER` like below
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, // keep whatever is in the current state
        user: action.user, // update the user slice - with whatever the action.user was
      };
    default:
      return state;
  }
};

export default reducer;
