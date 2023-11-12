import React from "react";


const Contact = ({ contacts, onDeleteContact }) => (
    <ul title='Contacts'>
    {contacts.map((contact) => (
        <li key={contact.name}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => onDeleteContact(contact.name)}>Delete</button>
        </li>
        ))}
    </ul>

)


export default Contact;
