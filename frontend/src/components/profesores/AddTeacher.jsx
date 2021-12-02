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
    const history = useHistory();

    const saveTeacher = (e) =>{
        e.preventDefault();

        const teachers = {id,name, lastName, level, email, phone}
        TeacherServices.create(teachers)
        .then(response =>{
            console.log("Profesor añadido correctamente", response.data);
            history.push("/profesores");
        }).catch(error =>{
            console.log("Ha ocurrido un error al agregar", error);
        });
    }

    const [levels, setLevels] = useState([]);

    useEffect(() => {
        TeacherServices.getAll()
        .then(response => {
            setLevels(response.data)
        })
        .catch(error => {
            console.log('Hubo un error', error)
        })
    },)


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
                <div>
                    <button className="btn btn-primary" onClick={(e) =>saveTeacher(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/agregarprofesores">Volver a la lista</Link>
        </div>

);
}

export default AddTeacher;