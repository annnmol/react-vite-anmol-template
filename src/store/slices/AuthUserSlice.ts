import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import Cookies from "../../utils/cookies";

export interface ILogin {
  username: string;
  password: string;
  remember: string;
}

interface Props {
  authUser: ILogin | null;
}

const getParsedToken = () => {
  const token = Cookies.getCookieWithExpiry('token');
  if (token) {
    return JSON.parse(token);
  }
  return null;
}

const INITIAL_STATE: Props = {
  authUser: getParsedToken()
};

const AuthUserSlice = createSlice({
  name: "AuthUserSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<any>) {
      state.authUser = payload;

      //demo token
      const token = JSON.stringify(payload);
      // Store token in cookies with a 2-minute expiration time
      Cookies.storeCookieWithExpiry('token', token, 1);
    },

    removeAuthUser(state) {
      state.authUser = null;
      Cookies.deleteCookie('token');
    },
  },
});

export default AuthUserSlice.reducer;

export const { setAuthUser, removeAuthUser } = AuthUserSlice.actions;

export const authUserStore = (state: RootState) => state.currentAuthUser;
