import React, { useState, useEffect } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import TeacherServices from "../../services/TeacherServices";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function MoreInfoTeacher() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (id) {
      TeacherServices.get(id)
        .then((teacher) => {
          setName(teacher.data.name);
          setLastName(teacher.data.lastName);
          setLevel(teacher.data.level);
          setEmail(teacher.data.email);
          setPhone(teacher.data.phone);
        })
        .catch((error) => {
          console.log("Hubo un error", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <br />
      <h2 className="mt-5">
        Docente {name} {lastName}
      </h2>
      <hr />
      <h3 className="pb-3">Datos</h3>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <td>Documento</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Grado que dirige</td>
              <td>Correo</td>
              <td>Teléfono</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{lastName}</td>
              <td>{level}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <Link
                  to={`/profesores/editar/${id}`}
                  className="btn btn-success"
                >
                  Modificar
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={`/profesores`}>Volver a la lista</Link>
      </div>
    </div>
  );
}

export default MoreInfoTeacher;
