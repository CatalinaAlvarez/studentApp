import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TeacherServices from "../../services/TeacherServices";
import { Link } from 'react-router-dom';

const EditTeacher = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();
    const {id} = useParams();

    const saveTeacher = (e) =>{
        e.preventDefault();

        const teacher = { id, name, lastName, level, email, phone }
        TeacherServices.update(teacher)
        .then(response =>{
            console.log("Profesor editado correctamente", response.data);
            history.push("/profesores");
        }).catch(error =>{
            console.log("Ha ocurrido un error al modificar", error);
        });
    }

    useEffect(() => {
        if(id){
            TeacherServices.get(id)
                .then(teacher => {
                    setName(teacher.data.name);
                    setLastName(teacher.data.lastName);
                    setLevel(teacher.data.level.id);
                    setEmail(teacher.data.email);
                    setPhone(teacher.data.phone);
            })
            .catch(error => {
                console.log('Hubo un error', error)
            })
        }
    },[])



    return ( 
        <div className="container">
            <h1>Editar profesor</h1>
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
                    <button className="btn btn-primary" onClick={(e) =>saveTeacher(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/profesores">Volver a la lista</Link>
        </div>
        
     );
}

export default EditTeacher;