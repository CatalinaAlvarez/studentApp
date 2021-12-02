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
      <h1>Administrar profesores</h1>
      <hr/>
      <input
      className="form-control col-4 mb-3"
      placeholder="Buscar profesor por nombre"
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
              <td>Grado que dirige</td>
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
                  <td>{teacher.level}</td>
                  <td>
                    <Link to={`/profesores/info/${teacher.id}`} className="btn btn-primary">Más Info...</Link>
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