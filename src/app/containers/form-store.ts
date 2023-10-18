import { createSlice,  PayloadAction } from '@reduxjs/toolkit'


interface FormState {
  value: Form
}

const emptyForm : Form = {
    inputText   :  null,
    color       :  null,
    iconStyle   :  null,
    numberIcons :  null
}

const initialState: FormState = { value : emptyForm }

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      resetForm(state: FormState){
        state.value = emptyForm
      },
      setInputText: (state: FormState, action: PayloadAction<string | null>) => {
        state.value.inputText = action.payload;
      },
      setColor: (state: FormState, action: PayloadAction<string | null>) => {
        state.value.color = action.payload;
      },
      setIconStyle: (state: FormState, action: PayloadAction<string | null>) => {
        state.value.iconStyle = action.payload;
      },
      setNumberIcons: (state: FormState, action: PayloadAction<number | null>) => {
        state.value.numberIcons = action.payload;
      },
    },
  }) 
  
export const { resetForm, setInputText, setColor, setIconStyle, setNumberIcons } = formSlice.actions;

export default formSlice