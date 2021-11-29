import React, { useState,useEffect } from 'react';
import './index.css';
import "bootswatch/dist/pulse/bootstrap.min.css";
import StudentService from './services/StudentService';


function App (){

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
    <div className="">
      <h1>App Students</h1>
      <div>
        <table border="1" cellPadding="10">
          <tr>
            <td>Documento</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Grado</td>
            <td>Correo</td>
            <td>Teléfono</td>
          </tr>
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
        </table>
      </div>
    </div>
  );
}

export default App;