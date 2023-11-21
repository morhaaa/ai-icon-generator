import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  value: boolean;
}

const initialState: ModalState = { value: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalState) => {
      state.value = true;
    },
    closeModal: (state: ModalState) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
