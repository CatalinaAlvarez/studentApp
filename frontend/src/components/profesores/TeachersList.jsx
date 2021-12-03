import React, { useState, useEffect } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import TeacherServices from "../../services/TeacherServices";
import { Link } from "react-router-dom";
import "../../index.css";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [filterTeachers, setFilterTeachers] = useState([]);

  //Filtrado por la búsqueda
  function searchTeachers(busqueda) {
    const { value } = busqueda.target;
    const filter = teachers.filter(
      (teachers) =>
        teachers.name.toLowerCase().includes(value.toLowerCase()) ||
        teachers.lastName.toLowerCase().includes(value.toLowerCase()) ||
        teachers.id.toString().includes(value.toLowerCase()) ||
        teachers.level.toLowerCase().includes(value.toLowerCase())
    );
    setFilterTeachers(filter);
  }

  //Obtiene todos los profesores
  useEffect(() => {
    TeacherServices.getAll()
      .then((response) => {
        setTeachers(response.data);
        setFilterTeachers(response.data);
      })
      .catch((error) => {
        console.log("Algo salio mal", error);
      });
  }, []);

  //Borrar profesor
  const init = () => {
    TeacherServices.getAll()
      .then((response) => {
        console.log("Imprimiendo Estudiantes", response.data);
        setTeachers(response.data);
        setFilterTeachers(response.data);
      })
      .catch((error) => {
        console.log("Esto salió mal: ", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    TeacherServices.remove(id)
      .then((response) => {
        console.log("Se elimino correctamente", response.data);
        init();
      })
      .catch((error) => {
        console.log("Ocurrio un error al eliminar", error);
      });
  };

  return (
    <div className="container">
      <h2 className="mt-5">Administrar profesores</h2>
      <Link to="/agregarprofesores" className="agregar btn btn-success mb-3">
        Agregar profesor
      </Link>
      <hr />
      <input
        className="form-control col-4 mb-3"
        placeholder="Buscar profesor por nombre"
        onChange={searchTeachers}
      ></input>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <td>Documento</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Grado que dirige</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {filterTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.level}</td>
                <td>
                  <Link
                    to={`/profesores/info/${teacher.id}`}
                    className="btn btn-primary"
                  >
                    Más Info...
                  </Link>
                  <button
                    className="eliminar btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(teacher.id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherList;
