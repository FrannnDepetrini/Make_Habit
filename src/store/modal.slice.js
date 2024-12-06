import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Inicio de sesion',
};

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    modalMessage: (state, action) => {
      let CustomMessage = '';
      const method = action.payload;
      if (method === false) {
        CustomMessage = 'Inicio de sesion';
      } else {
        CustomMessage = 'Registro';
      }
      state.message = CustomMessage;
    },
  },
});

export const { modalMessage } = modalSlice.actions;
export default modalSlice.reducer;
