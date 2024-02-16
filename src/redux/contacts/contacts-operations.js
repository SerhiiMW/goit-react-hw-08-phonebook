import * as contactsApi from "../../api/contacts-api";

import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError, addContactsLoading, addContactsSuccess, addContactsError, deleteContactsLoading, deleteContactsSuccess, deleteContactsError} from "./contacts-slice";

export const fetchContacts = () => {
    const func = async (dispatch) => {
        try {
            dispatch(fetchContactsLoading());
            const data = await contactsApi.requestFetchContacts();
            dispatch(fetchContactsSuccess(data));
        }
        catch (error) {
            dispatch(fetchContactsError(error.message));
        }
    }

    return func;
}

export const addContacts = (body)=> {
    const func = async (dispatch)=> {
        try {
            dispatch(addContactsLoading());
            const data = await contactsApi.requestAddContacts(body);
            dispatch(addContactsSuccess(data));
        }
        catch(error) {
            dispatch(addContactsError(error.message));
        }
    }

    return func;
}

export const deleteContacts = id => {
    const func = async (dispatch) => {
        try {
            dispatch(deleteContactsLoading());
            await contactsApi.requestDeleteContacts(id);
            dispatch(deleteContactsSuccess(id))
        }
        catch(error){
            dispatch(deleteContactsError(error.message));
        }
    }

    return func;
}