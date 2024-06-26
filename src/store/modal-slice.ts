import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  modalName: string;
  isOpen: boolean;
}

const initialState: ModalState = {
  modalName: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    isOpenModal: (state,actions) => {
      state.isOpen = actions.payload.open
      state.modalName = actions.payload.name
    },
  },
});

export const {  isOpenModal} = modalSlice.actions;

export default modalSlice.reducer;
