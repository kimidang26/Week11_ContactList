import { useReducer , useEffect, useState} from "react";
import React from "react";

const reducer = (state, action) =>{
    console.log(action, 'this is the action');
    switch(action.type) {
        case 'editId' :
            console.log('Logged if the editId action is being dispatched')
            return { ...state, name: action.payload };
  
        case 'editFirstName':
        return { ...state, description: action.payload };
  
        case 'editLastName':
        return { ...state, category: action.payload };

        case 'editCellPhone':
        return { ...state, date: action.payload };

        case 'editEmail':
        return { ...state, id: action.payload };

        case 'clearForm':
            return {
                id: "", 
                parentfirst_name: "", 
                parentlast_name: "", 
                cell_phone:"", 
                email: ""
            };

      default:
        return state;
    }
  };



function Contacts ()  {
    const [contacts, setContacts] = useState([]);  

//****************Fetches/Gets Contact Table***********/

    const getContacts = async () => {
        const response = await fetch(`http://localhost:8080/contact`);
        const contacts = await response.json();
        setContacts(contacts);
      };
      
      useEffect(() => {
        getContacts();
      }, []);

// ********USE REDUCER PT 2 WITH EVENT HANDLER**********
//Inital state of the form is empty
const initialState = {
    id: "",
    parentfirst_name: "", 
    parentlast_name: "", 
    cell_phone:"", 
    email: ""

};

const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);


// const handleSubmit = (e) => {
//     e.preventDefault();
//     setContacts([...contacts, state]);
// }

//**********POST REQUEST (ADD NEW CONTACT)**********/
const handleAddContact = async (e) => {
    e.preventDefault();
    const newContact = {
      id: state.id, 
      parentfirst_name: state.parentfirst_name, 
      parentlast_name: state.parentlast_name, 
      phone_number: state.phone_number, 
      email: state.email
    };
    console.log(newContact);

    const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    });
    const content = await response.json();
    console.log(content);
    setContacts([...contacts, content]);
    dispatch({ type: 'clearForm' })
};

// **************Delete*************

const handleDeleteContact = async (handleDeleteContactCallback) => {
  const response = await fetch(`http://localhost:2626/species/${handleDeleteContactCallback}`, {
    method: 'DELETE',
  })
  await response.json();
  const deleteContactFunction = contacts.filter((contact) => contact.id !== handleDeleteContactCallback);
  setContacts(deleteContactFunction);
}


const AddContact = (newContact) => {
  setContacts((contacts) => [...contacts, newContact])
}

// **********WHAT IS ON BROWSER*************


      return (
        <section className="contacts-page">
        <div className="contact">
          <h2> List of Contact</h2>
          <table>
            <thead>
    
              <tr>
                <th>ID</th>
                <th>Parent First Name</th>
                <th>Parent Last Name</th>
                <th>Cell Phone</th>
                <th>Email</th>
              </tr>
    
            </thead>

    
      
            <tbody>
            {contacts.map((contact,index) => {
              return (
                <tr key={index}>
                  <td>{contact.id}</td>
                  <td>{contact.parentfirst_name}</td>
                  <td>{contact.parentlast_name}</td>
                  <td>{contact.cell_phone}</td>
                  <td>{contact.email}</td>
                  {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
                  <td><button onClick={() => handleDeleteContact(contact.id)}>DELETE</button></td>
                </tr>
              
              );
            })}
            </tbody>
         </table>
         
         <div className="AddContact">
            <h2>Add A Contact</h2>
            <form id="add-contact" className="form-contact" action="#" onSubmit={handleAddContact}>
              <fieldset>
                <label>Parent First Name:</label>
                  <input type="text" id="editFirstName" name="firstname" placeholder="parent first name" value={state.parentfirst_name} onChange={(e) => dispatch({type: "editFirstName", payload: e.target.value,})} />
                  <br />
                <label>Parent Last Name:</label>
                  <input type="text" id="editLastName" name="lastname" placeholder="parent last name" value={state.parentlast_name} onChange={(e) => dispatch({type: "editLasttName", payload: e.target.value,})} />
                  <br />
                <label>Parent Cell Number:</label>
                  <input type="text" id="editCellPhone" name="cellphone" placeholder="parent cell number" value={state.cell_phone} onChange={(e) => dispatch({type: "editCellPhone", payload: e.target.value,})} />
                  <br />
                <label>Parent Email:</label>
                  <input type="text" id="editEmail" name="email" placeholder="parent email" value={state.email} onChange={(e) => dispatch({type: "editEmail", payload: e.target.value,})} />
                  <br/>
              </fieldset>
                <input type="submit" value="Add Contact" />
            </form>
         </div>
        </div>
    </section>
      );
}

export default Contacts;