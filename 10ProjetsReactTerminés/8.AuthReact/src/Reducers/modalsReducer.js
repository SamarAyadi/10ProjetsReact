const initialState = {
  showSignIn: false,
  showSignUp: false,
};

export default function modalsReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLEIN":
      if (state.showSignIn) {
        return {
          showSignIn: false,
          showSignUp: false,
        };
      } else {
        return {
          showSignIn: true,
          showSignUp: false,
        };
      }
    case "TOGGLEUP":
      if (state.showSignUp) {
        return {
          showSignIn: false,
          showSignUp: false,
        };
      } else {
        return {
          showSignIn: false,
          showSignUp: true,
        };
      }
    case "CLOSEMODAL":
        return {
            showSignIn: false,
            showSignUp: false
        }
    default: 
    return state;
  }
}
