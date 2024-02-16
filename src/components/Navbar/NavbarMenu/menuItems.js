import { nanoid } from "nanoid";

const menuItems = [
    {
        id: nanoid(),
        to: "/register",
        text: "Register",
        private: false,
    },
    {
        id: nanoid(),
        to: "/login",
        text: "Login",
        private: false,
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts",
        private: true,
    },
];

export default menuItems;