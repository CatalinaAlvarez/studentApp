import React, { useState,useEffect } from 'react';
import "bootswatch/dist/united/bootstrap.min.css";
import StudentService from '../../services/StudentService';
import { Link } from 'react-router-dom';


function StudentList (){

  const [ students, setStudents ] = useState([]);
  const [ filterStudents, setFilterStudent ] = useState([]);

  //FILTRADO POR NOMBRES
  function searchStudents(busqueda){
    const {value} = busqueda.target;
    const filter = students.filter(student => student.name.toLowerCase().includes(value.toLowerCase()));
    setFilterStudent(filter);
  }

  useEffect(() => {
    StudentService.getAll()
    .then(response => {
      setStudents(response.data);
      setFilterStudent(response.data)
    })
    .catch(error => {
      console.log('Algo salio mal', error);
    })
  }, []);

  //DELETE
  const init = () => {
    StudentService.getAll()
    .then(response => {
      console.log('Imprimiendo Estudiantes', response.data);
      setStudents(response.data);
      setFilterStudent(response.data);
    })
    .catch(error => {
      console.log('Esto salió mal: ', error);
    })
  }

  useEffect(() => {
    init();
  },[]);

  const handleDelete = (id) => {
    StudentService.remove(id)
      .then(response => {
          console.log('Se elimino correctamente', response.data);
          init();

      })
      .catch(error => {
          console.log('Ocurrio un error al eliminar', error);
      })
  }



  return (
    <div className="container">
      <h1>Administrar estudiantes</h1>
      <hr/>
      <input
      class="form-control col-4 mb-3"
      placeholder="Buscar estudiante por Documento"
      onChange={searchStudents}
      ></input>
      <div>
        <Link to="/agregar" className="btn btn-primary mb-2">Agregar estudiante</Link>
        <table className= "table table-bordered table-striped">
        <thead className ="thead-dark">
            <tr>
              <td>Documento</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Grado</td>
              <td>Correo</td>
              <td>Teléfono</td>
              <td>Funciones</td>
            </tr>
          </thead>
          <tbody>
            {
              filterStudents.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.idLevel}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <Link to={`/students/editar/${student.id}`} className="btn btn-info">Modificar</Link>
                    <button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(student.id);
                    }}>Eliminar</button>
                  </td>
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