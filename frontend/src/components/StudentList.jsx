import React, { useState,useEffect } from 'react';
import "bootswatch/dist/pulse/bootstrap.min.css";
import StudentService from '../services/StudentService';


function StudentList (){

  const [ students, setStudents ] = useState([]);

  useEffect(() => {
    StudentService.getAll()
    .then(response => {
      console.log('Imprimiendo Estudiantes', response.data);
      setStudents(response.data);
    })
    .catch(error => {
      console.log('Algo salio mal', error);
    })
  }, [])

  return (
    <div className="container">
      <h1>App Students</h1>
      <div>
        <hr/>
        <table className= "table table-bordered table-striped">
        <thead className ="thead-dark">
            <tr>
              <td>Documento</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Grado</td>
              <td>Correo</td>
              <td>Teléfono</td>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.level}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;