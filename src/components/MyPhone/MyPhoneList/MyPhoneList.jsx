import styles from "./my-phoneList.module.css";

const MyPhoneList = ({ items, deleteContact }) => {
    const elements = items.map(({id, name, number})=> 
        <li className={styles.phoneList} key={id}>{name}: {number} <button className={styles.btn} onClick={()=> deleteContact(id)} type="button">Delete</button></li>)
    
        return (
            <ol className={styles.list}>
                {elements}
            </ol>
    )
}

export default MyPhoneList;