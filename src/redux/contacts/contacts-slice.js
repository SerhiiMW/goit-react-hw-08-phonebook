import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const loadingReducer = (state) => {
    state.isLoading = true;
    state.error = null;
};

const errorReducer = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        fetchContactsLoading: loadingReducer,
        fetchContactsSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
        },
        fetchContactsError:errorReducer,
        addContactsLoading: loadingReducer,
        addContactsSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.items.push(payload);
        },
        addContactsError: errorReducer,
        deleteContactsLoading: loadingReducer,
        deleteContactsSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.items = state.items.filter(({ id }) => id !== payload);
        },
        deleteContactsError: errorReducer,
    }
});

export const { fetchContactsLoading, fetchContactsSuccess, fetchContactsError, addContactsLoading, addContactsSuccess, addContactsError, deleteContactsLoading, deleteContactsSuccess, deleteContactsError} = contactsSlice.actions;

export default contactsSlice.reducer;