import { useReducer , useEffect, useState} from "react";

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
const initialState = {
    id: "",
    parentfirst_name: "", 
    parentlast_name: "", 
    cell_phone:"", 
    email: ""

};

const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);


const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, state]);
}

//**********POST REQUEST**********/
const handleAddEvent = async (e) => {
    e.preventDefault();
    const newContact = { id: state.id, parentfirst_name: state.parentfirst_name, parentlast_name: state.parentlast_name, phone_number: state.phone_number, email: state.email};
    console.log(newContact);
    const response = await fetch(`http://localhost:8080/contact`, {
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
};






// **********WHAT IS ON BROWSER*************


      return (
    
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
                  {/* <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td> */}
                </tr>
              
              );
            })}
            </tbody>
         </table>

            
            
    
        </div>
      );
}

export default Contacts;