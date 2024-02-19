import MyPhone from "components/MyPhone/MyPhone";
import styles from './contacts-page.module.css'

const ContactsPage = ()=> {
    return (
        <div className={styles.ContactsPageWrapper}>
            <MyPhone />
        </div>
    )
}

export default ContactsPage;