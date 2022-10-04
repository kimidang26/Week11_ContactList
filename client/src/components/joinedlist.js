import { useEffect, useState} from "react";


  function JoinedList ()  {
    const [family, setFamily] = useState([]);  

//****************Fetches/Gets Contact Table***********/

    const getFamily = async () => {
        const response = await fetch(`http://localhost:8080/joinedList`);
        const family = await response.json();
        setFamily(family);
      };
      
      useEffect(() => {
        getFamily();
      }, []);






// **********WHAT IS ON BROWSER*************


      return (
        <section className="joined-page">
        <div className="family">
          <h2> Emergency Contact for Student</h2>
          <table>
            <thead>
    
              <tr>
                <th>ID</th>
                <th>Student First Name</th>
                <th>Student Last Name</th>
                <th>Parent First Name</th>
                <th>Parent Last Name</th>
                <th>Cell Phone Number</th>
              </tr>
    
            </thead>

    
      
            <tbody>
            {family.map((family,index) => {
              return (
                <tr key={index}>
                  <td>{family.id}</td>
                  <td>{family.first_name}</td>
                  <td>{family.last_name}</td>
                  <td>{family.parentfirst_name}</td>
                  <td>{family.parentlast_name}</td>
                  <td>{family.cell_phone}</td>
                </tr>
              
              );
            })}
            </tbody>
         </table>
        </div>
    </section>
      );
}

export default JoinedList;