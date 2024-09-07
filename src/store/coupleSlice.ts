import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICouple } from "../models/ICouple";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";

type CoupleState = {
  list: ICouple[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CoupleState = {
  list: [],
  isLoading: false,
  error: null,
};

export const fetchCouples = createAsyncThunk<
  ICouple[],
  undefined,
  { rejectValue: string }
>("couple/fetchCouples", async (_, { rejectWithValue }) => {
  try {
    const ref = collection(firebaseDB, "vsuet_couples");
    const querySnapshot = await getDocs(ref);
    const couples: ICouple[] = [];

    querySnapshot.forEach((doc) => {
      couples.push({ ...doc.data() } as ICouple);
    });

    return couples;
  } catch (error) {
    console.error(error);
    return rejectWithValue("Server Error!");
  }
});

const coupleSlice = createSlice({
  name: "couple",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCouples.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCouples.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchCouples.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  },
});

export default coupleSlice.reducer;
