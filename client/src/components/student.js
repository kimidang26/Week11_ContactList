import { useEffect, useState} from "react";


  function Students ()  {
    const [students, setStudents] = useState([]);  

//****************Fetches/Gets Contact Table***********/

    const getStudents = async () => {
        const response = await fetch(`http://localhost:8080/students`);
        const students = await response.json();
        setStudents(students);
      };
      
      useEffect(() => {
        getStudents();
      }, []);






// **********WHAT IS ON BROWSER*************


      return (
        <section className="students-page">
        <div className="students">
          <h2> List of Students</h2>
          <table>
            <thead>
    
              <tr>
                <th>ID</th>
                <th>Student First Name</th>
                <th>Student Last Name</th>
                <th>Teacher</th>
              </tr>
    
            </thead>

    
      
            <tbody>
            {students.map((student,index) => {
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.teacher}</td>
                </tr>
              
              );
            })}
            </tbody>
         </table>
        </div>
    </section>
      );
}

export default Students;