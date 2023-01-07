import Contacts from "../components/ContactsPage/Contacts";

const ContactsPage = () => {
  return (
    <div className="p-4 mt-24 my-5 mx-auto w-96 dark:text-white">
      <h3 className="mb-12 text-3xl font-bold text-center uppercase tracking-widest">
        Contacts
      </h3>
      <Contacts />      
    </div>
  )
}

export default ContactsPage;