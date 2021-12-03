import React, { useState, useEffect } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import GradeService from "../../services/GradeService";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function GradeList() {
  const [grades, setGrades] = useState([]);
  const { id } = useParams();

  //Obtener nota por el id
  useEffect(() => {
    GradeService.get(id)
      .then((response) => {
        setGrades(response.data);
      })
      .catch((error) => {
        console.log("Algo salio mal", error);
      });
  }, []);

  return (
    <div className="container">
      <Link to={`/estudiantes/notas/${id}`} className="notas btn btn-success">
        Modificar
      </Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <td>Materias</td>
            <td>Notas</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matemáticas</td>
            <td>{grades.math}</td>
          </tr>
          <tr>
            <td>Español</td>
            <td>{grades.language}</td>
          </tr>
          <tr>
            <td>Ciencias</td>
            <td>{grades.science}</td>
          </tr>
          <tr>
            <td>Sociales</td>
            <td>{grades.politics}</td>
          </tr>
          <tr>
            <td>Física</td>
            <td>{grades.physics}</td>
          </tr>
          <tr>
            <td>Química</td>
            <td>{grades.chemistry}</td>
          </tr>
          <tr>
            <td>Artes</td>
            <td>{grades.arts}</td>
          </tr>
          <tr>
            <td>Deportes</td>
            <td>{grades.sports}</td>
          </tr>
          <tr>
            <td>Biología</td>
            <td>{grades.biology}</td>
          </tr>
          <tr>
            <td>Inglés</td>
            <td>{grades.english}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GradeList;
