const initialState = {
  currentArtist: null,
  status: "idle",
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_CURRENT_ARTIST": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_CURRENT_ARTIST": {
      return {
        ...state,
        currentArtist: {
          profile: action.currentArtist,
        },
        status: "idle",
      };
    }
    case "RECEIVE_CURRENT_ARTIST_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
