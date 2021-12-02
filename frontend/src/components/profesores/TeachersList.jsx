import React, { useState,useEffect } from 'react';
import "bootswatch/dist/pulse/bootstrap.min.css";
import TeacherServices from '../../services/TeacherServices';
import { Link } from 'react-router-dom';


function TeacherList (){

  const [ teachers, setTeachers ] = useState([]);
  const [ filterTeachers, setFilterTeachers ] = useState([]);

  //FILTRADO POR NOMBRES
  function searchTeachers(busqueda){
    const {value} = busqueda.target;
    const filter = teachers.filter(teacher => teacher.name.toLowerCase().includes(value.toLowerCase()));
    setFilterTeachers(filter);
  }

  useEffect(() => {
    TeacherServices.getAll()
    .then(response => {
        setTeachers(response.data);
        setFilterTeachers(response.data)
    })
    .catch(error => {
      console.log('Algo salio mal', error);
    })
  }, []);

  //DELETE
  const init = () => {
    TeacherServices.getAll()
    .then(response => {
      console.log('Imprimiendo Estudiantes', response.data);
      setTeachers(response.data);
      setFilterTeachers(response.data);
    })
    .catch(error => {
      console.log('Esto salió mal: ', error);
    })
  }

  useEffect(() => {
    init();
  },[]);

  const handleDelete = (id) => {
    TeacherServices.remove(id)
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
      <h1>Administrar Profesores</h1>
      <hr/>
      <input
      class="form-control col-4 mb-3"
      placeholder="Buscar Profesor por Nombre"
      onChange={searchTeachers}
      ></input>
      <div>
        <Link to="/agregarprofesores" className="btn btn-primary mb-2">Agregar profesor</Link>
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
              filterTeachers.map(teacher => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.idLevel}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>
                  <td>
                    <Link to={`/profesores/editar/${teacher.id}`} className="btn btn-info">Modificar</Link>
                    <button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(teacher.id);
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

export default TeacherList;