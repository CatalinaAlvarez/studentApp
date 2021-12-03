import React, { useState, useEffect } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import StudentService from "../../services/StudentService";
import { Link } from "react-router-dom";
import "../../index.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [filterStudents, setFilterStudent] = useState([]);

  //Filtrado en el buscador
  function searchStudents(busqueda) {
    const { value } = busqueda.target;
    const filter = students.filter(
      (student) =>
        student.name.toLowerCase().includes(value.toLowerCase()) ||
        student.lastName.toLowerCase().includes(value.toLowerCase()) ||
        student.id.toString().includes(value.toLowerCase()) ||
        student.level.toLowerCase().includes(value.toLowerCase())
    );
    setFilterStudent(filter);
  }

  useEffect(() => {
    StudentService.getAll()
      .then((response) => {
        setStudents(response.data);
        setFilterStudent(response.data);
      })
      .catch((error) => {
        console.log("Algo salio mal", error);
      });
  }, []);

  //Borrar estudiante
  const init = () => {
    StudentService.getAll()
      .then((response) => {
        console.log("Imprimiendo Estudiantes", response.data);
        setStudents(response.data);
        setFilterStudent(response.data);
      })
      .catch((error) => {
        console.log("Esto salió mal: ", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    StudentService.remove(id)
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
      <h2 className="mt-5">Administrar estudiantes</h2>
      <Link to="/agregar" className="agregar btn btn-success mb-3">
        Agregar estudiante
      </Link>

      <hr />

      <input
        className="form-control  mb-3 "
        placeholder="Buscar estudiante"
        onChange={searchStudents}
      ></input>

      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <td>Documento</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Grado</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {filterStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.lastName}</td>
                <td>{student.level}</td>
                <td>
                  <Link
                    to={`/estudiantes/info/${student.id}`}
                    className="btn btn-primary"
                  >
                    Más Info...
                  </Link>
                  <button
                    className="eliminar btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(student.id);
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

export default StudentList;
