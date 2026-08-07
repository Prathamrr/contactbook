const STORAGE_KEY = "contacts"


// Contacts get karna
export function getContacts() {
    const data = localStorage.getItem(STORAGE_KEY)

    return data ? JSON.parse(data) : []
}


// Contacts save karna
export function saveContacts(contacts) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(contacts)
    )
}


// New Contact add karna
export function addContact(contact) {
    const contacts = getContacts()

    contacts.push(contact)

    saveContacts(contacts)
}


// Contact update karna
export function updateContact(updatedContact) {

    const contacts = getContacts()

    const index = contacts.findIndex(
        item => item.id == updatedContact.id
    )

    if(index !== -1){
        contacts[index] = updatedContact
    }

    saveContacts(contacts)
}


// Contact delete karna
export function deleteContact(id){

    const contacts = getContacts()

    const newContacts = contacts.filter(
        item => item.id != id
    )

    saveContacts(newContacts)
}