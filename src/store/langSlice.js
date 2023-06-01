import {createSlice} from '@reduxjs/toolkit';
import {initialLang, LANGS_ARRAY} from '@/data/lang';

const initialState = {
  lang: {...initialLang}
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = {...LANGS_ARRAY.find(lang => lang.value === action.payload)};
    }
  }
});

export const {changeLang} = langSlice.actions;

export default langSlice.reducer;