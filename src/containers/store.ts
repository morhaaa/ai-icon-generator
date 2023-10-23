import {configureStore} from '@reduxjs/toolkit'
import formSlice from './form-reducer';


export const store = configureStore({  
      reducer: {
        form: formSlice.reducer
        },
    });
    
export type StoreType = ReturnType<typeof store.getState>