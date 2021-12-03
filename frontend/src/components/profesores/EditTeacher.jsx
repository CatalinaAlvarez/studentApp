import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TeacherServices from "../../services/TeacherServices";
import { Link } from "react-router-dom";

const EditTeacher = () => {
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

  const saveTeacher = (e) => {
    e.preventDefault();

    const teacher = { id, name, lastName, level, email, phone };

    //Validar campos y modificar profesor
    if (!alfaNumericRE.test(teacher.name)) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un nombre valido");
    } else if (!alfaNumericRE.test(teacher.lastName)) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un apellido valido");
    } else if (!emailRE.test(teacher.email)) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un correo valido");
    } else if (teacher.phone <= 0) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un teléfono valido");
    } else if (teacher.level.length <= 0) {
      setSendAlert(true);
      setAlertMessage("Por favor ingrese un teléfono valido");
    } else {
      TeacherServices.update(teacher)
        .then((response) => {
          console.log("Profesor editado correctamente", response.data);
          history.push(`/profesores/info/${id}`);
        })
        .catch((error) => {
          console.log("Ha ocurrido un error al modificar", error);
        });
    }
  };

  //Obtiene el profesor por el id
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
      <h2 className="mt-5">Editar profesor</h2>
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
          <button className="btn btn-primary" onClick={(e) => saveTeacher(e)}>
            Agregar
          </button>
        </div>
      </form>
      <hr />
      <Link to="/profesores">Volver a la lista</Link>
    </div>
  );
};

export default EditTeacher;
