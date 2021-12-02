import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import TeacherServices from "../../services/TeacherServices";

const AddTeacher = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [sendAlert, setSendAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const history = useHistory();
    const alfaNumericRE = /[A-Za-z0-9_]/;
    const emailRE = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    const saveTeacher = (e) =>{
        e.preventDefault();

        const teachers = {id,name, lastName, level, email, phone}

        if (!alfaNumericRE.test(teachers.name)) {
            setSendAlert(true);
            setAlertMessage("Por favor complete el nombre con caracteres alfanuméricos");
        }else if(!alfaNumericRE.test(teachers.lastName)){
            setSendAlert(true);
            setAlertMessage("Por favor complete el apellido con caracteres alfanuméricos");
        }else if(!emailRE.test(teachers.email)){
            setSendAlert(true);
            setAlertMessage("Por favor ingrese un correo valido");
        }else if(teachers.id<=0){
            setSendAlert(true);
            setAlertMessage("Por favor ingrese un documento valido");
        }else if(teachers.phone<=0){
            setSendAlert(true);
            setAlertMessage("Por favor ingrese un teléfono valido");
        }else{
            TeacherServices.create(teachers)
            .then(response =>{
                history.push("/profesores");
            }).catch(error =>{
                console.log("Ha ocurrido un error al agregar", error);
            });
        }
    }

    return (
        <div className="container">
            <h1>Añadir nuevo Profesor</h1>
            <hr/>
            <p>{}</p>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingrese el Documento"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese el nombre"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Ingrese el apellido"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    placeholder="Ingrese el grado"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese el correo electrónico"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ingrese el teléfono"
                    />
                </div>
                {sendAlert
						? <div className="alert alert-danger" role="alert">{alertMessage}</div>: null}
                <div>
                    <button className="btn btn-primary" onClick={(e) =>saveTeacher(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/profesores">Volver a la lista</Link>
        </div>

);
}

export default AddTeacher;