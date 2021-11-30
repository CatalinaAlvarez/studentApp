import React, { useState } from "react";
import { useHistory } from "react-router";
import StudentService from "../services/StudentService";
import { Link } from 'react-router-dom';

const AddStudent = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    const saveStudent = (e) =>{
        e.preventDefault();

        const student = {name, lastName, level, email, phone}
        StudentService.create(student)
        .then(response =>{
            console.log("Estudiante añadido correctamente", response.data);
            history.push("/");
        }).catch(error =>{
            console.log("Ha ocurrido un error al agregar", error);
        });
    }



    return ( 
        <div className="container">
            <h1>Añadir nuevo estudiante</h1>
            <hr/>
            <form>
                <div className="form-group">
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
                    id="lasName"
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
                <div>
                    <button className="btn btn-primary" onClick={(e) =>saveStudent(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Volver a la lista</Link>
        </div>
        
     );
}

export default AddStudent;
