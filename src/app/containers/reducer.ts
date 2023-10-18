import {configureStore} from '@reduxjs/toolkit'
import formSlice from './form-store';


export const store = configureStore({  
    //esportiamo lo store con tutti gli 'Slice' ovvero gli stati.  
      reducer: {
        form: formSlice.reducer
        },
    });
    
export type StoreType = ReturnType<typeof store.getState>