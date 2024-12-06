import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { insertHabit, selectHabit } from '../db';
import Habit from '../model/habit';
import { extractErrorMessage } from '../utils/extractError';

const initialState = {
  habits: [],
  isLoading: false,
};
/** habitTitle,
  habitType,
  habitDescription,
  habitDate,
  creationDate,
  habitImage */
export const saveHabit = createAsyncThunk('habit/saveHabit', async (habit, thunkAPI) => {
  try {
    const result = await insertHabit(
      habit.habitTitle,
      habit.habitType,
      habit.habitDescription,
      habit.habitDate,
      habit.creationDate,
      habit.habitImage || null
    );
    const newHabit = new Habit(
      result.insertId,
      habit.habitTitle,
      habit.habitType,
      habit.habitDescription,
      habit.habitDate,
      habit.creationDate,
      habit.habitImage || null
    );
    return newHabit;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const getHabits = createAsyncThunk('habit/getHabits', async (_, thunkAPI) => {
  try {
    const result = await selectHabit();
    return result?.rows?._array;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveHabit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveHabit.fulfilled, (state, action) => {
        state.saveHabit = false;
        state.habits.push(action.payload);
      })
      .addCase(saveHabit.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getHabits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(getHabits.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default habitSlice.reducer;
