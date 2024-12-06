import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FIREBASE_AUTH_SIGN_IN_URL, FIREBASE_AUTH_SIGN_UP_URL } from '../constants/firebase/index';

const initialState = {
  isLoading: false,
  error: false,
  token: null,
  userId: null,
  hasError: null,
};

export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }) => {
  try {
    const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    const data = await response.json();

    if (data.error) {
      const FormattedError = data.error.message.toLowerCase().replace(/_/g, ' ');
      const formattedErrorFinal =
        FormattedError.charAt(0).toUpperCase() + FormattedError.slice(1).toString();
      throw new Error(formattedErrorFinal);
    } else {
      return {
        token: data.idToken,
        userId: data.localId,
      };
    }
  } catch (error) {
    throw error.message;
  }
});

export const signUp = createAsyncThunk('auth/signUp', async ({ email, password }) => {
  try {
    const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    const data = await response.json();

    if (data.error) {
      const FormattedError = data.error.message.toLowerCase().replace(/_/g, '');
      const formattedErrorFinal = FormattedError.charAt(0).toUpperCase() + FormattedError.slice(1);

      throw new Error(formattedErrorFinal);
    } else {
      return {
        token: data.idToken,
        userId: data.localId,
      };
    }
  } catch (error) {
    throw error.message;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.hasError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
        state.hasError = true;
        state.token = null;
        state.userId = null;
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
        state.hasError = true;
        state.token = null;
        state.userId = null;
        state.isLoading = false;
      });
  },
});
export const { clearError } = authSlice.actions;
export default authSlice.reducer;
