import { getAvatar } from '../../services/UserService'
export const userInfo = {
    state: {
        firstName: '',
        lastName: '',
        avatar: '',
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setFirstName(state, firstName) {
        return {
            ...state,
            firstName,
          };
      },
      setLastName(state, lastName) {
        return {
            ...state,
            lastName,
          };
      },
      setAvatar(state, avatar) {
        return {
            ...state,
            avatar,
          };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      async updateFirstName(payload, rootState) {
        this.setFirstName(payload);
      },
      async getAvatartAsync(payload, rootState) {
        const avatarURL = await getAvatar(payload)
        this.setAvatar(avatarURL);
      },
    }),
    selectors: (slice, createSelector) => ({
        selectLastName() {
          return slice(state => state.lastName);
        },
        selectFirstName() {
          return slice(state => state.firstName);
        },
    }),
  };