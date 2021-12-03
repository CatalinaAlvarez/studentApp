import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import StudentService from "../../services/StudentService";
import { Link } from "react-router-dom";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sendAlert, setSendAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const alfaNumericRE =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  const emailRE = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const saveStudent = (e) => {
    e.preventDefault();

    const student = { id, name, lastName, level, email, phone };

    if (!alfaNumericRE.test(student.name)) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un nombre valido");
    } else if (!alfaNumericRE.test(student.lastName)) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un apellido valido");
    } else if (!emailRE.test(student.email)) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un correo valido");
    } else if (student.phone <= 0) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un teléfono valido");
    } else if (student.level.length <= 0) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un teléfono valido");
    } else {
      StudentService.update(student)
        .then((response) => {
          console.log("Estudiante editado correctamente", response.data);
          history.push(`/estudiantes/info/${id}`);
        })
        .catch((error) => {
          console.log("Ha ocurrido un error al modificar", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      StudentService.get(id)
        .then((student) => {
          setName(student.data.name);
          setLastName(student.data.lastName);
          setLevel(student.data.level);
          setEmail(student.data.email);
          setPhone(student.data.phone);
        })
        .catch((error) => {
          console.log("Hubo un error", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5">Editar estudiante</h2>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 mb-3"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Modicar el nombre"
          />
          <input
            type="text"
            className="form-control col-4 mb-3"
            id="lasName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Modicar el apellido"
          />
          <select
            type="text"
            className="form-control col-4 mb-3"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Seleccione un grado</option>
            <option>Preescolar</option>
            <option>Primero</option>
            <option>Segundo</option>
            <option>Tercero</option>
            <option>Cuarto</option>
            <option>Quinto</option>
            <option>Sexto</option>
            <option>Séptimo</option>
            <option>Octavo</option>
            <option>Noveno</option>
            <option>Decimo</option>
            <option>Once</option>
          </select>
          <input
            type="text"
            className="form-control col-4 mb-3"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Modicar el correo electrónico"
          />
          <input
            type="text"
            className="form-control col-4 mb-3"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Modicar el teléfono"
          />
        </div>
        {sendAlert ? (
          <div className="alert alert-danger" role="alert">
            {alertMessage}
          </div>
        ) : null}
        <div>
          <button className="btn btn-primary" onClick={(e) => saveStudent(e)}>
            Agregar
          </button>
        </div>
      </form>
      <hr />
      <Link to="/estudiantes">Volver a la lista</Link>
    </div>
  );
};

export default EditStudent;
