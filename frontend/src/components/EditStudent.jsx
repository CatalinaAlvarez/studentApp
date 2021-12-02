import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import StudentService from "../services/StudentService";
import { Link } from 'react-router-dom';

const EditStudent = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();
    const {id} = useParams();

    const saveStudent = (e) =>{
        e.preventDefault();

        const student = { id, name, lastName, level, email, phone }
        StudentService.update(student)
        .then(response =>{
            console.log("Estudiante editado correctamente", response.data);
            history.push("/");
        }).catch(error =>{
            console.log("Ha ocurrido un error al modificar", error);
        });
    }

    useEffect(() => {
        if(id){
            StudentService.get(id)
                .then(student => {
                    setName(student.data.name);
                    setLastName(student.data.lastName);
                    setLevel(student.data.level.id);
                    setEmail(student.data.email);
                    setPhone(student.data.phone);
            })
            .catch(error => {
                console.log('Hubo un error', error)
            })
        }
    },[])



    return ( 
        <div className="container">
            <h1>Editar estudiante</h1>
            <hr/>
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
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="level.id"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    placeholder="Modicar el grado"
                    />
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
                <div>
                    <button className="btn btn-primary" onClick={(e) =>saveStudent(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Volver a la lista</Link>
        </div>
        
     );
}

export default EditStudent;