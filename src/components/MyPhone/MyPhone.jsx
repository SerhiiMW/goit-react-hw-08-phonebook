import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import MyPhoneForm from './MyPhoneForm/MyPhoneForm';
import MyPhoneList from './MyPhoneList/MyPhoneList';

import { setFilter } from "../../redux/filter/filter-slice";
import { selectFilteredContacts } from "../../redux/contacts/contacts-selector";
import { fetchContacts, addContacts, deleteContacts } from "../../redux/contacts/contacts-operations";

import styles from './my-phone.module.css';

const MyPhone = () => {
    const {items, isLoading, error} = useSelector(selectFilteredContacts);
 
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchContacts());
    }, [dispatch]);

    const isDublicate = ({ name }) => {
        const normalizedName = name.toLowerCase();

        const dublicate = items.find(item => {
            const normalizedCurrentName = item.name.toLowerCase();
            return (normalizedCurrentName === normalizedName);
        })

        return Boolean(dublicate);
    }

    const onAddContact= (data) => {
        if (isDublicate(data)) {
            return alert(`${data.name} is already in contacts`);
        }

        dispatch(addContacts(data));
    }

    const onDeleteContact = (id) => {
        dispatch(deleteContacts(id));
    }

    const changeFitler = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <MyPhoneForm className={styles.phoneForm} onSubmit={onAddContact} />
        <div className={styles.listWrapper}>
            <h1>Contacts</h1>
            <p>Find contacts by name</p>
            <input className={styles.filter} onChange={changeFitler} name="filter" placeholder="" />
            {isLoading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            {Boolean(items.length) && <MyPhoneList items={items} deleteContact={onDeleteContact} />}
        </div>
    </div>
)
};

export default MyPhone;
